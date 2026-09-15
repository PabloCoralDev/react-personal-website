import { useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { StravaActivity } from '../../types'
import { formatDuration, formatActivityDate } from '../../utils/formatStrava'

interface RouteMapProps {
  activities: StravaActivity[]
  onSelectActivity?: (activity: StravaActivity) => void
  height?: string
  /** Fit the view tightly to the given activities' tracks (used for a single activity). When false, the map defaults to a fixed Gainesville view instead of zooming out to fit every scattered route. */
  autoFit?: boolean
  /** Disable pan/zoom/click chrome for small inline previews (e.g. inside a card), so they don't trap page scroll or show controls that don't fit. */
  interactive?: boolean
}

const GAINESVILLE: [number, number] = [29.6516, -82.3248]
const GAINESVILLE_ZOOM = 12

const sportColor: Record<StravaActivity['sport'], string> = {
  Run: '#ff2d78',
  Ride: '#ff7ab8',
}

const photoIcon = L.divIcon({
  className: 'strava-photo-marker',
  html: '<span></span>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
})

function FitBounds({ activities }: { activities: StravaActivity[] }) {
  const map = useMap()

  useEffect(() => {
    const points = activities.flatMap((a) => a.track ?? [])
    if (points.length === 0) return
    const bounds = L.latLngBounds(points)
    map.fitBounds(bounds, { padding: [32, 32] })
  }, [activities, map])

  return null
}

function ActivitySummary({ activity }: { activity: StravaActivity }) {
  return (
    <div className="strava-map-popup-summary">
      <p className="strava-map-popup-caption">{activity.name}</p>
      <p className="strava-map-popup-meta">
        {activity.sport} · {formatActivityDate(activity.date)}
      </p>
      <p className="strava-map-popup-meta">
        {activity.distanceMiles.toFixed(1)} mi · {formatDuration(activity.movingTimeSeconds)} · {Math.round(activity.elevationGainFt)} ft gain
      </p>
    </div>
  )
}

export function RouteMap({ activities, onSelectActivity, height = '480px', autoFit = false, interactive = true }: RouteMapProps) {
  const withTracks = activities.filter((a) => a.track && a.track.length > 1)
  const photoPins = activities.flatMap((a) =>
    (a.photos ?? [])
      .filter((p) => p.lat !== undefined && p.lng !== undefined)
      .map((p) => ({ activity: a, photo: p })),
  )

  return (
    <div className={`strava-map-wrap ${interactive ? '' : 'strava-map-wrap-static'}`} style={{ height }}>
      <MapContainer
        center={GAINESVILLE}
        zoom={GAINESVILLE_ZOOM}
        scrollWheelZoom={false}
        dragging={interactive}
        touchZoom={interactive}
        doubleClickZoom={interactive}
        zoomControl={interactive}
        attributionControl={interactive}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {autoFit && <FitBounds activities={withTracks} />}

        {withTracks.map((activity) => (
          <Polyline
            key={activity.id}
            positions={activity.track as [number, number][]}
            pathOptions={{ color: sportColor[activity.sport], weight: 4, opacity: 0.9 }}
            eventHandlers={interactive ? { click: () => onSelectActivity?.(activity) } : undefined}
          >
            {interactive && (
              <Popup>
                <ActivitySummary activity={activity} />
              </Popup>
            )}
          </Polyline>
        ))}

        {interactive &&
          photoPins.map(({ activity, photo }, index) => (
            <Marker key={`${activity.id}-${index}`} position={[photo.lat as number, photo.lng as number]} icon={photoIcon}>
              <Popup>
                <img src={photo.src} alt={activity.name} className="strava-map-popup-img" />
                <ActivitySummary activity={activity} />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}
