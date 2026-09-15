import { useMemo, useState } from 'react'
import type { PianoPiece } from '../types'
import { pianoRepertoire } from '../data/pianoRepertoire'
import { PianoPieceCard } from './cards/PianoPieceCard'
import { PianoPieceModal } from './modals/PianoPieceModal'

const categoryLabel: Record<PianoPiece['category'], string> = {
  solo: 'Solo Piano',
  chamber: 'Chamber Music',
  ensemble: 'Jacaré Brazil Ensemble',
}

const categoryFilters: Array<{ value: PianoPiece['category'] | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'solo', label: 'Solo' },
  { value: 'chamber', label: 'Chamber' },
  { value: 'ensemble', label: 'Ensemble' },
]

const statusFilters: Array<{ value: PianoPiece['status'] | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'up-next', label: 'Up Next' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'performed', label: 'Performed' },
]

const statusOrder: Record<PianoPiece['status'], number> = { 'up-next': 0, 'in-progress': 1, performed: 2 }

export function PianoSection() {
  const [selectedPiece, setSelectedPiece] = useState<PianoPiece | null>(null)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<PianoPiece['category'] | 'all'>('all')
  const [statusFilter, setStatusFilter] = useState<PianoPiece['status'] | 'all'>('all')

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return pianoRepertoire.filter((piece) => {
      const matchesQuery =
        !query ||
        piece.title.toLowerCase().includes(query) ||
        piece.composer.toLowerCase().includes(query)
      const matchesCategory = categoryFilter === 'all' || piece.category === categoryFilter
      const matchesStatus = statusFilter === 'all' || piece.status === statusFilter
      return matchesQuery && matchesCategory && matchesStatus
    })
  }, [search, categoryFilter, statusFilter])

  const groups = useMemo(() => {
    const order: PianoPiece['category'][] = ['solo', 'chamber', 'ensemble']
    return order
      .map((category) => ({
        category,
        pieces: filtered
          .filter((piece) => piece.category === category)
          .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]),
      }))
      .filter((group) => group.pieces.length > 0)
  }, [filtered])

  return (
    <section id="piano" className="section piano-section">
      <div className="section-content">
        <h3 className="section-title">Piano Repertoire</h3>

        <div className="piano-controls">
          <input
            type="text"
            className="piano-search-bar"
            placeholder="Search by title or composer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="piano-filter-pills">
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                className={`piano-filter-pill ${categoryFilter === f.value ? 'active' : ''}`}
                onClick={() => setCategoryFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="piano-filter-pills">
            {statusFilters.map((f) => (
              <button
                key={f.value}
                className={`piano-filter-pill ${statusFilter === f.value ? 'active' : ''}`}
                onClick={() => setStatusFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {groups.length === 0 && (
          <p className="piano-empty-state">No pieces match your search.</p>
        )}

        {groups.map((group) => (
          <div key={group.category} className="piano-group">
            <h4 className="piano-group-title">{categoryLabel[group.category]}</h4>
            <div className="piano-grid">
              {group.pieces.map((piece, index) => (
                <PianoPieceCard key={`${piece.composer}-${piece.title}-${index}`} piece={piece} onClick={() => setSelectedPiece(piece)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedPiece && (
        <PianoPieceModal piece={selectedPiece} onClose={() => setSelectedPiece(null)} />
      )}
    </section>
  )
}
