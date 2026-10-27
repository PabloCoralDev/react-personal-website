import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { PianoPiece } from '../types'
import { pianoRepertoire, pieceKey } from '../data/pianoRepertoire'
import { PianoPieceCard } from './cards/PianoPieceCard'
import { getYouTubeEmbedUrl } from '../utils/youtube'

type Category = PianoPiece['category']
type Status = PianoPiece['status']

const categoryLabel: Record<Category, string> = {
  solo: 'Solo Piano',
  chamber: 'Chamber Music',
  ensemble: 'Jacaré Brazil Ensemble',
}

const categoryFilters: Array<{ value: Category | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'solo', label: 'Solo' },
  { value: 'chamber', label: 'Chamber' },
  { value: 'ensemble', label: 'Ensemble' },
]

const statusFilters: Array<{ value: Status | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'up-next', label: 'Up Next' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'performed', label: 'Performed' },
]

const statusOrder: Record<Status, number> = { 'up-next': 0, 'in-progress': 1, performed: 2 }

/** Inline detail row: spans the grid under the tapped score instead of opening a modal. */
function PieceDetail({ piece, onClose }: { piece: PianoPiece; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const score = piece.pdfLocation || piece.imslpPdfUrl
  const video = piece.videoUrl ? getYouTubeEmbedUrl(piece.videoUrl) : null

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [piece])

  return (
    <div ref={ref} className="piano-detail" role="region" aria-label={`${piece.title} details`}>
      <button className="piano-detail-close" onClick={onClose} aria-label="Close details">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <h4 className="piano-detail-title">{piece.title}</h4>
      <p className="piano-detail-composer">{piece.composer}</p>
      {piece.notes && <p className="piano-detail-notes">{piece.notes}</p>}

      {(score || piece.imslpUrl) && (
        <div className="piano-detail-links">
          {score && (
            <a href={score} target="_blank" rel="noopener noreferrer" className="text-link">Open score ↗</a>
          )}
          {piece.imslpUrl && (
            <a href={piece.imslpUrl} target="_blank" rel="noopener noreferrer" className="text-link">View on IMSLP ↗</a>
          )}
        </div>
      )}

      {video && (
        <div className="piano-video-embed">
          <iframe
            src={video}
            title={`${piece.title} recording`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 6h18M6.5 12h11M10 18h4" />
    </svg>
  )
}

export function PianoSection() {
  const { state } = useLocation()
  const [selectedKey, setSelectedKey] = useState<string | null>((state as { piece?: string } | null)?.piece ?? null)
  const [search, setSearch] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all')
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all')

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return pianoRepertoire.filter((piece) => {
      const matchesQuery =
        !query || piece.title.toLowerCase().includes(query) || piece.composer.toLowerCase().includes(query)
      const matchesCategory = categoryFilter === 'all' || piece.category === categoryFilter
      const matchesStatus = statusFilter === 'all' || piece.status === statusFilter
      return matchesQuery && matchesCategory && matchesStatus
    })
  }, [search, categoryFilter, statusFilter])

  const groups = useMemo(() => {
    const order: Category[] = ['solo', 'chamber', 'ensemble']
    return order
      .map((category) => ({
        category,
        pieces: filtered
          .filter((piece) => piece.category === category)
          .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]),
      }))
      .filter((group) => group.pieces.length > 0)
  }, [filtered])

  const activeFilters = Number(categoryFilter !== 'all') + Number(statusFilter !== 'all')

  return (
    <section id="piano" className="section piano-section">
      <div className="section-content">
        <h3 className="section-title">Piano Repertoire</h3>

        <div className="piano-controls">
          <label className="piano-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder="Search title or composer"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search repertoire"
            />
          </label>

          <button
            className={`piano-filter-toggle${filtersOpen || activeFilters ? ' active' : ''}`}
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
            aria-controls="piano-filters"
            aria-label={`Filters${activeFilters ? ` (${activeFilters} active)` : ''}`}
          >
            <FilterIcon />
            {activeFilters > 0 && <span className="piano-filter-count">{activeFilters}</span>}
          </button>
        </div>

        {filtersOpen && (
          <div id="piano-filters" className="piano-filters">
            <div className="piano-filter-row">
              <span className="piano-filter-label">Type</span>
              {categoryFilters.map((f) => (
                <button
                  key={f.value}
                  className={`piano-filter-option${categoryFilter === f.value ? ' active' : ''}`}
                  onClick={() => setCategoryFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="piano-filter-row">
              <span className="piano-filter-label">Status</span>
              {statusFilters.map((f) => (
                <button
                  key={f.value}
                  className={`piano-filter-option${statusFilter === f.value ? ' active' : ''}`}
                  onClick={() => setStatusFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {groups.length === 0 && <p className="piano-empty-state">No pieces match your search.</p>}

        {groups.map((group) => (
          <div key={group.category} className="piano-group">
            <h4 className="piano-group-title">
              {categoryLabel[group.category]}
              <span className="piano-group-count">{group.pieces.length}</span>
            </h4>
            <div className="piano-grid">
              {group.pieces.map((piece) => {
                const key = pieceKey(piece)
                const isSelected = key === selectedKey
                return (
                  <Fragment key={key}>
                    <PianoPieceCard
                      piece={piece}
                      selected={isSelected}
                      onClick={() => setSelectedKey(isSelected ? null : key)}
                    />
                    {isSelected && <PieceDetail piece={piece} onClose={() => setSelectedKey(null)} />}
                  </Fragment>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
