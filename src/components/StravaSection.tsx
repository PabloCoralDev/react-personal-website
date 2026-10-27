import { lazy, Suspense, useMemo, useState } from 'react'
import type { StravaActivity, StravaPersonalRecord, StravaSport } from '../types'
import { stravaSnapshot } from '../data/stravaData'
import { formatActivityDate } from '../utils/formatStrava'
import { ActivityHeatmap } from './strava/ActivityHeatmap'
import { StravaActivityModal } from './modals/StravaActivityModal'
import { Carousel } from './Carousel'

const RouteMap = lazy(() => import('./strava/RouteMap').then((m) => ({ default: m.RouteMap })))

const sportFilters: Array<{ value: StravaSport | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'Run', label: 'Run' },
  { value: 'Ride', label: 'Ride' },
]

// Herbie leads: it's the fun one.
const bikePhotos = [
  { gearName: 'Herbie', src: '/pictures/bike-herbie.jpg', blurb: 'Trek in the classic US Postal Service livery' },
  { gearName: 'Blue bike', src: '/pictures/bike-blue.jpg', blurb: 'Where the miles started' },
]

const PACE_LABELS = new Set(['Mile', '5K', '10K', 'Half Marathon', 'Marathon'])

const mi = (n: number) => `${Math.round(n).toLocaleString()} mi`

function prDetail(record: StravaPersonalRecord, activity?: StravaActivity) {
  if (!activity || activity.distanceMiles <= 0) return '—'
  if (PACE_LABELS.has(record.label)) {
    const pace = activity.movingTimeSeconds / activity.distanceMiles
    return `${Math.floor(pace / 60)}:${Math.round(pace % 60).toString().padStart(2, '0')} /mi`
  }
  return activity.name
}

function Medal() {
  return (
    <svg className="strava-medal" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h4l2 6H9zM13 2h4l-2 6h-4z" fill="#0071e3" />
      <circle cx="12" cy="15" r="7" fill="url(#medal-gold)" />
      <circle cx="12" cy="15" r="4.6" fill="none" stroke="#fff6d6" strokeOpacity="0.7" />
      <defs>
        <linearGradient id="medal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7d98b" />
          <stop offset="0.55" stopColor="#d4a537" />
          <stop offset="1" stopColor="#b8862b" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function StravaSection() {
  const [sportFilter, setSportFilter] = useState<StravaSport | 'all'>('all')
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null)

  const { activities, years, personalRecords, gear, heatmap, generatedAt } = stravaSnapshot
  const byId = useMemo(() => new Map(activities.map((a) => [a.id, a])), [activities])

  const filteredActivities = useMemo(
    () => activities.filter((a) => sportFilter === 'all' || a.sport === sportFilter),
    [activities, sportFilter],
  )
  const moments = useMemo(() => activities.filter((a) => a.photos && a.photos.length > 0), [activities])
  const garage = useMemo(() => [...gear].sort((a, b) => Number(!!b.current) - Number(!!a.current)), [gear])

  const totalMiles = years.reduce((sum, y) => sum + y.miles.Run + y.miles.Ride, 0)
  const totalElevation = years.reduce((sum, y) => sum + y.elevationFt, 0)
  const totalActivities = years.reduce((sum, y) => sum + y.activityCount, 0)
  const selectedActivity = selectedActivityId ? byId.get(selectedActivityId) : null

  const renderRecords = (sport: StravaSport, label: string) => (
    <table className="strava-table">
      <thead>
        <tr>
          <th colSpan={2}>{label}</th>
          <th>Best</th>
          <th className="strava-col-detail">Pace / Activity</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {personalRecords.filter((r) => r.sport === sport).map((record) => {
          const activity = record.activityId ? byId.get(record.activityId) : undefined
          return (
            <tr
              key={record.label}
              className={activity ? 'clickable' : ''}
              onClick={() => activity && setSelectedActivityId(activity.id)}
            >
              <td className="strava-col-medal"><Medal /></td>
              <td>{record.label}</td>
              <td className="strava-col-strong">{record.value}</td>
              <td className="strava-col-detail">{prDetail(record, activity)}</td>
              <td className="strava-col-muted">
                {new Date(record.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <section id="strava" className="section strava-section">
      <div className="section-content">
        <h3 className="section-title">Training Log</h3>
        <p className="section-subtitle">
          Synced from Strava · {new Date(generatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="piano-filter-pills strava-filters">
          {sportFilters.map((f) => (
            <button
              key={f.value}
              className={`btn btn-secondary piano-filter-pill ${sportFilter === f.value ? 'active' : ''}`}
              onClick={() => setSportFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="strava-preview-layout">
          <div className="strava-preview-map">
            <Suspense fallback={<div className="strava-map-loading">Loading map…</div>}>
              <RouteMap activities={filteredActivities} onSelectActivity={(a) => setSelectedActivityId(a.id)} height="100%" />
            </Suspense>
          </div>

          <div className="strava-preview-stats">
            <div className="strava-metric">
              <span className="strava-metric-label">Total Miles</span>
              <span className="strava-metric-value">{Math.round(totalMiles).toLocaleString()}</span>
            </div>
            <div className="strava-metric">
              <span className="strava-metric-label">Elevation</span>
              <span className="strava-metric-value">{Math.round(totalElevation).toLocaleString()} ft</span>
            </div>
            <div className="strava-metric">
              <span className="strava-metric-label">Activities</span>
              <span className="strava-metric-value">{totalActivities}</span>
            </div>
          </div>
        </div>

        <ActivityHeatmap days={heatmap} fit />

        <h4 className="strava-subheading">The Garage</h4>
        <div className="strava-garage">
          <div className="strava-garage-photos">
            <Carousel
              label="Bikes"
              items={bikePhotos}
              getKey={(b) => b.gearName}
              slideClassName="bike-slide"
              renderItem={(b) => {
                const g = gear.find((x) => x.name === b.gearName)
                return (
                  <figure className="bike-figure">
                    <img src={b.src} alt={b.gearName} loading="lazy" />
                    <figcaption>
                      <span className="bike-name">{b.gearName}</span>
                      <span className="bike-meta">
                        {[g?.brand, g?.model].filter(Boolean).join(' ')}
                        {g?.distanceMiles !== undefined && ` · ${mi(g.distanceMiles)}`}
                        {` · ${b.blurb}`}
                      </span>
                    </figcaption>
                  </figure>
                )
              }}
            />
          </div>

          <table className="strava-table strava-garage-table">
            <thead>
              <tr>
                <th>Gear</th>
                <th>Type</th>
                <th className="strava-col-num">Miles</th>
              </tr>
            </thead>
            <tbody>
              {garage.map((g) => (
                <tr key={g.id}>
                  <td>
                    <span className="strava-col-strong">{g.name}</span>
                    {g.current && <span className="strava-current">Current</span>}
                    <span className="strava-col-sub">{[g.brand, g.model].filter(Boolean).join(' ')}</span>
                  </td>
                  <td className="strava-col-muted">{g.type === 'bike' ? 'Bike' : 'Shoes'}</td>
                  <td className="strava-col-num">{g.distanceMiles !== undefined ? g.distanceMiles.toLocaleString() : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="strava-subheading">Personal Records</h4>
        <div className="strava-records">
          {renderRecords('Run', 'Running')}
          {renderRecords('Ride', 'Riding')}
        </div>

        <h4 className="strava-subheading">Year by Year</h4>
        <table className="strava-table">
          <thead>
            <tr>
              <th>Year</th>
              <th className="strava-col-num">Run</th>
              <th className="strava-col-num">Ride</th>
              <th className="strava-col-num">Total</th>
              <th className="strava-col-num strava-col-detail">Elevation</th>
              <th className="strava-col-num">Activities</th>
            </tr>
          </thead>
          <tbody>
            {[...years].reverse().map((y) => (
              <tr key={y.year}>
                <td className="strava-col-strong">{y.year}</td>
                <td className="strava-col-num">{mi(y.miles.Run)}</td>
                <td className="strava-col-num">{mi(y.miles.Ride)}</td>
                <td className="strava-col-num strava-col-strong">{mi(y.miles.Run + y.miles.Ride)}</td>
                <td className="strava-col-num strava-col-detail">{Math.round(y.elevationFt).toLocaleString()} ft</td>
                <td className="strava-col-num">{y.activityCount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {moments.length > 0 && (
          <>
            <h4 className="strava-subheading">Moments</h4>
            <Carousel
              label="Training moments"
              items={moments}
              getKey={(a) => a.id}
              slideClassName="projects-slide"
              renderItem={(a) => (
                <div className="project-card-compact" onClick={() => setSelectedActivityId(a.id)}>
                  <img src={a.photos![0].src} alt={a.name} className="project-thumb" loading="lazy" />
                  <h5 className="project-title">{a.name}</h5>
                  <p className="strava-moment-meta">
                    {a.sport} · {a.distanceMiles.toFixed(1)} mi · {formatActivityDate(a.date)}
                  </p>
                </div>
              )}
            />
          </>
        )}
      </div>

      {selectedActivity && (
        <StravaActivityModal activity={selectedActivity} onClose={() => setSelectedActivityId(null)} />
      )}
    </section>
  )
}
