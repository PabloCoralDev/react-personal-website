import { lazy, Suspense } from 'react'
import type { StravaActivity, StravaPersonalRecord } from '../../types'

const RouteMap = lazy(() => import('./RouteMap').then((m) => ({ default: m.RouteMap })))

interface LeaderboardListProps {
  records: StravaPersonalRecord[]
  activities: StravaActivity[]
  onSelect: (activityId: string) => void
}

const PACE_LABELS = new Set(['Mile', '5K', '10K', 'Half Marathon', 'Marathon'])

function formatPace(activity: StravaActivity): string | null {
  if (activity.distanceMiles <= 0) return null
  const paceSeconds = activity.movingTimeSeconds / activity.distanceMiles
  const m = Math.floor(paceSeconds / 60)
  const s = Math.round(paceSeconds % 60)
  return `${m}:${s.toString().padStart(2, '0')} /mi`
}

const gearEmoji: Record<string, string> = { bike: '🚲', shoe: '👟' }

function guessGearEmoji(activity: StravaActivity): string {
  return activity.sport === 'Ride' ? gearEmoji.bike : gearEmoji.shoe
}

export function LeaderboardList({ records, activities, onSelect }: LeaderboardListProps) {
  const byId = new Map(activities.map((a) => [a.id, a]))
  const run = records.filter((r) => r.sport === 'Run')
  const ride = records.filter((r) => r.sport === 'Ride')

  const renderGroup = (label: string, group: StravaPersonalRecord[]) =>
    group.length > 0 && (
      <div className="strava-leaderboard-group">
        <h4 className="piano-group-title">{label}</h4>
        <div className="strava-pr-grid">
          {group.map((record, index) => {
            const activity = record.activityId ? byId.get(record.activityId) : undefined
            const hasTrack = activity?.track && activity.track.length > 1
            const thumb = !hasTrack ? activity?.photos?.[0]?.src : undefined
            const secondary = activity
              ? PACE_LABELS.has(record.label)
                ? formatPace(activity)
                : `${Math.round(activity.elevationGainFt)} ft gain`
              : null

            return (
              <div
                key={index}
                className={`strava-pr-card ${record.activityId ? 'clickable' : ''}`}
                onClick={() => record.activityId && onSelect(record.activityId)}
              >
                {activity && hasTrack && (
                  <div className="strava-pr-card-map">
                    <Suspense fallback={<div className="strava-pr-map-loading" />}>
                      <RouteMap activities={[activity]} height="130px" autoFit interactive={false} />
                    </Suspense>
                  </div>
                )}
                {thumb && <img src={thumb} alt="" className="strava-pr-thumb" />}

                <div className="strava-pr-card-body">
                  <span className="strava-pr-trophy">🏆</span>
                  <span className="strava-pr-label">{record.label}</span>
                  <span className="strava-pr-value">{record.value}</span>
                  {secondary && <span className="strava-pr-secondary">{secondary}</span>}
                  {activity?.gearName && (
                    <span className="strava-pr-gear">
                      {guessGearEmoji(activity)} {activity.gearName}
                    </span>
                  )}
                  <span className="strava-pr-date">
                    {new Date(record.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )

  return (
    <>
      {renderGroup('Running PRs', run)}
      {renderGroup('Riding PRs', ride)}
    </>
  )
}
