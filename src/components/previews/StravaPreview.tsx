import { lazy, Suspense, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { stravaSnapshot } from '../../data/stravaData'
import { ActivityHeatmap } from '../strava/ActivityHeatmap'

const RouteMap = lazy(() => import('../strava/RouteMap').then((m) => ({ default: m.RouteMap })))

export function StravaPreview() {
  const navigate = useNavigate()

  const latestYear = stravaSnapshot.years[stravaSnapshot.years.length - 1]
  const totalMiles = useMemo(
    () => stravaSnapshot.years.reduce((sum, y) => sum + y.miles.Run + y.miles.Ride, 0),
    [],
  )
  const latestPR = stravaSnapshot.personalRecords[0]
  const previewActivities = useMemo(() => stravaSnapshot.activities.slice(0, 12), [])

  return (
    <section id="strava" className="section strava-section strava-preview-section">
      <div className="section-content">
        <h3 className="section-title">Training Log</h3>

        <div className="strava-preview-layout">
          <div className="strava-preview-map" onClick={() => navigate('/training')}>
            <Suspense fallback={<div className="strava-map-loading">Loading map…</div>}>
              <RouteMap activities={previewActivities} height="100%" />
            </Suspense>
          </div>

          <div className="strava-preview-stats">
            <div className="strava-metric">
              <span className="strava-metric-label">Total Miles</span>
              <span className="strava-metric-value">{Math.round(totalMiles).toLocaleString()}</span>
            </div>
            {latestYear && (
              <div className="strava-metric">
                <span className="strava-metric-label">{latestYear.year} So Far</span>
                <span className="strava-metric-value">
                  {Math.round(latestYear.miles.Run + latestYear.miles.Ride).toLocaleString()} mi
                </span>
              </div>
            )}
            {latestPR && (
              <div className="strava-metric">
                <span className="strava-metric-label">{latestPR.sport} {latestPR.label} PR</span>
                <span className="strava-metric-value">{latestPR.value}</span>
              </div>
            )}
          </div>
        </div>

        <ActivityHeatmap days={stravaSnapshot.heatmap} fit />

        <div className="see-more-wrap see-more-roomy">
          <Link to="/training" className="btn btn-secondary">See Full Training Log →</Link>
        </div>
      </div>
    </section>
  )
}
