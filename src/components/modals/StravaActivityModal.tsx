import { lazy, Suspense } from 'react'
import type { StravaActivity } from '../../types'
import { formatDuration, formatActivityDate } from '../../utils/formatStrava'

const RouteMap = lazy(() => import('../strava/RouteMap').then((m) => ({ default: m.RouteMap })))

interface StravaActivityModalProps {
  activity: StravaActivity
  onClose: () => void
}

export function StravaActivityModal({ activity, onClose }: StravaActivityModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content strava-activity-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <div className="book-modal-header">
          <h3 className="book-modal-title">{activity.name}</h3>
          <p className="book-modal-author">
            {activity.sport} · {formatActivityDate(activity.date)}
            {activity.locationLabel && ` · ${activity.locationLabel}`}
          </p>
        </div>

        <div className="book-modal-body">
          <div className="strava-activity-stats">
            <div>
              <span className="strava-activity-stat-value">{activity.distanceMiles.toFixed(1)} mi</span>
              <span className="strava-activity-stat-label">Distance</span>
            </div>
            <div>
              <span className="strava-activity-stat-value">{formatDuration(activity.movingTimeSeconds)}</span>
              <span className="strava-activity-stat-label">Moving Time</span>
            </div>
            <div>
              <span className="strava-activity-stat-value">{Math.round(activity.elevationGainFt)} ft</span>
              <span className="strava-activity-stat-label">Elevation</span>
            </div>
          </div>

          {activity.track && activity.track.length > 1 && (
            <Suspense fallback={<div className="strava-map-loading">Loading map…</div>}>
              <RouteMap activities={[activity]} height="320px" autoFit />
            </Suspense>
          )}

          {activity.photos && activity.photos.length > 0 && (
            <div className="strava-activity-photos">
              {activity.photos.map((photo, index) => (
                <img key={index} src={photo.src} alt={`${activity.name} photo ${index + 1}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
