import { lazy, Suspense, useMemo, useState } from 'react'
import type { StravaSport } from '../types'
import { stravaSnapshot } from '../data/stravaData'
import { ActivityHeatmap } from './strava/ActivityHeatmap'
import { LeaderboardList } from './strava/LeaderboardList'
import { StravaActivityModal } from './modals/StravaActivityModal'

const RouteMap = lazy(() => import('./strava/RouteMap').then((m) => ({ default: m.RouteMap })))

const sportFilters: Array<{ value: StravaSport | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'Run', label: 'Run' },
  { value: 'Ride', label: 'Ride' },
]

export function StravaSection() {
  const [sportFilter, setSportFilter] = useState<StravaSport | 'all'>('all')
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null)

  const filteredActivities = useMemo(
    () => stravaSnapshot.activities.filter((a) => sportFilter === 'all' || a.sport === sportFilter),
    [sportFilter],
  )

  const filteredRecords = useMemo(
    () => stravaSnapshot.personalRecords.filter((r) => sportFilter === 'all' || r.sport === sportFilter),
    [sportFilter],
  )

  const selectedActivity = selectedActivityId
    ? stravaSnapshot.activities.find((a) => a.id === selectedActivityId)
    : null

  const totalMiles = stravaSnapshot.years.reduce((sum, y) => sum + y.miles.Run + y.miles.Ride, 0)
  const totalElevation = stravaSnapshot.years.reduce((sum, y) => sum + y.elevationFt, 0)

  return (
    <section id="strava" className="section strava-section">
      <div className="section-content">
        <h3 className="section-title">Training Log</h3>

        <div className="piano-controls">
          <div className="piano-filter-pills">
            {sportFilters.map((f) => (
              <button
                key={f.value}
                className={`piano-filter-pill ${sportFilter === f.value ? 'active' : ''}`}
                onClick={() => setSportFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="strava-stats-grid-top">
          <div className="strava-year-card strava-year-card-total">
            <span className="strava-year-card-value">{Math.round(totalMiles).toLocaleString()}</span>
            <span className="strava-year-card-label">Total Miles</span>
          </div>
          <div className="strava-year-card strava-year-card-total">
            <span className="strava-year-card-value">{Math.round(totalElevation).toLocaleString()} ft</span>
            <span className="strava-year-card-label">Total Elevation</span>
          </div>
        </div>

        <div className="strava-stats-grid-years">
          {stravaSnapshot.years.map((y) => (
            <div key={y.year} className="strava-year-card">
              <span className="strava-year-card-value">
                {Math.round(y.miles.Run + y.miles.Ride).toLocaleString()} mi
              </span>
              <span className="strava-year-card-label">{y.year}</span>
              <span className="strava-year-card-sub">
                {Math.round(y.miles.Run)} run · {Math.round(y.miles.Ride)} ride
              </span>
            </div>
          ))}
        </div>

        <ActivityHeatmap days={stravaSnapshot.heatmap} />

        {stravaSnapshot.gear.length > 0 && (
          <>
            <h4 className="piano-group-title strava-section-heading">Top Gear</h4>
            <div className="strava-gear-grid">
              {stravaSnapshot.gear.map((g) => (
                <div key={g.id} className={`strava-gear-card ${g.current ? 'strava-gear-current' : ''}`}>
                  <span className="strava-gear-type">{g.type}{g.current && ' · Current'}</span>
                  <span className="strava-gear-name">{g.name}</span>
                  {(g.brand || g.model) && (
                    <span className="strava-gear-model">{[g.brand, g.model].filter(Boolean).join(' ')}</span>
                  )}
                  {g.distanceMiles !== undefined && (
                    <span className="strava-gear-miles">{g.distanceMiles.toLocaleString()} mi</span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <h4 className="piano-group-title strava-section-heading">Top Routes</h4>
        <Suspense fallback={<div className="strava-map-loading">Loading map…</div>}>
          <RouteMap activities={filteredActivities} onSelectActivity={(a) => setSelectedActivityId(a.id)} />
        </Suspense>

        <div className="strava-pr-section">
          <LeaderboardList records={filteredRecords} activities={stravaSnapshot.activities} onSelect={setSelectedActivityId} />
        </div>
      </div>

      {selectedActivity && (
        <StravaActivityModal activity={selectedActivity} onClose={() => setSelectedActivityId(null)} />
      )}
    </section>
  )
}
