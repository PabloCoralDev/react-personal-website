import type { StravaHeatmapDay } from '../../types'

interface ActivityHeatmapProps {
  days: StravaHeatmapDay[]
  /** Stretch to the container width with no labels or scrolling; phones show only the last MOBILE_WEEKS. */
  fit?: boolean
}

const MOBILE_WEEKS = 26

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', '']
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

type Cell = { date: string; miles: number } | null

export function ActivityHeatmap({ days, fit = false }: ActivityHeatmapProps) {
  if (days.length === 0) return null

  const firstDate = new Date(days[0].date)
  const leadingBlanks = firstDate.getDay()
  const maxMiles = Math.max(...days.map((d) => d.miles), 1)

  const cells: Cell[] = [...Array.from({ length: leadingBlanks }, () => null), ...days]

  const weeks: Cell[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7))
  }

  const renderCells = (visibleWeeks: Cell[][]) =>
    visibleWeeks.map((week, wi) =>
      week.map((cell, di) =>
        cell === null ? (
          <div key={`${wi}-${di}`} className="strava-heatmap-cell strava-heatmap-cell-blank" />
        ) : (
          <div
            key={`${wi}-${di}`}
            className="strava-heatmap-cell"
            style={{ '--intensity': cell.miles === 0 ? 0 : Math.min(1, 0.15 + cell.miles / maxMiles) } as React.CSSProperties}
            title={cell.miles > 0 ? `${cell.date}: ${cell.miles} mi` : cell.date}
          />
        ),
      ),
    )

  if (fit) {
    const fitStyle = { gridAutoColumns: 'minmax(0, 1fr)' }
    return (
      <>
        <div className="strava-heatmap-fit strava-heatmap-fit-desktop" style={fitStyle}>{renderCells(weeks)}</div>
        <div className="strava-heatmap-fit strava-heatmap-fit-mobile" style={fitStyle}>{renderCells(weeks.slice(-MOBILE_WEEKS))}</div>
      </>
    )
  }

  let lastMonth = -1
  const monthLabels = weeks.map((week) => {
    const firstReal = week.find((c) => c !== null)
    if (!firstReal) return null
    const month = new Date(firstReal.date).getMonth()
    if (month !== lastMonth) {
      lastMonth = month
      return MONTH_NAMES[month]
    }
    return null
  })

  return (
    <div className="strava-heatmap-wrap">
      <div className="strava-heatmap-container">
        <div className="strava-heatmap-months" style={{ gridTemplateColumns: `repeat(${weeks.length}, 12px)` }}>
          {monthLabels.map((label, i) => (
            <span key={i} className="strava-heatmap-month-label" style={{ gridColumnStart: i + 1 }}>
              {label}
            </span>
          ))}
        </div>

        <div className="strava-heatmap-body">
          <div className="strava-heatmap-day-labels">
            {DAY_LABELS.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>

          <div className="strava-heatmap" style={{ gridTemplateColumns: `repeat(${weeks.length}, 12px)` }}>
            {renderCells(weeks)}
          </div>
        </div>
      </div>
    </div>
  )
}
