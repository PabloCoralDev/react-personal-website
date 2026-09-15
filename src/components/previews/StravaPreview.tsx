import { lazy, Suspense, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { stravaSnapshot } from '../../data/stravaData'

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
          <div className="strava-preview-map" onClick={() => navigate('/strava')}>
            <Suspense fallback={<div className="strava-map-loading">Loading map…</div>}>
              <RouteMap activities={previewActivities} height="100%" />
            </Suspense>
          </div>

          <div className="strava-preview-stats">
            <div className="strava-year-card strava-year-card-total">
              <span className="strava-year-card-value">{Math.round(totalMiles).toLocaleString()}</span>
              <span className="strava-year-card-label">Total Miles</span>
            </div>
            {latestYear && (
              <div className="strava-year-card">
                <span className="strava-year-card-value">
                  {Math.round(latestYear.miles.Run + latestYear.miles.Ride).toLocaleString()} mi
                </span>
                <span className="strava-year-card-label">{latestYear.year} So Far</span>
              </div>
            )}
            {latestPR && (
              <div className="strava-year-card">
                <span className="strava-year-card-value">{latestPR.value}</span>
                <span className="strava-year-card-label">{latestPR.sport} {latestPR.label} PR</span>
              </div>
            )}
          </div>
        </div>

        <div className="see-more-wrap">
          <Link to="/strava" className="see-more-link">See Full Training Log →</Link>
        </div>
      </div>
    </section>
  )
}
