import type { PianoPiece } from '../../types'

interface PianoPieceCardProps {
  piece: PianoPiece
  onClick: () => void
  selected?: boolean
}

const statusLabel: Record<PianoPiece['status'], string> = {
  performed: 'Performed',
  'in-progress': 'In Progress',
  'up-next': 'Up Next',
}

export function PianoPieceCard({ piece, onClick, selected = false }: PianoPieceCardProps) {
  const monogram = piece.composer.trim().charAt(0).toUpperCase()

  return (
    <button className={`piano-card${selected ? ' selected' : ''}`} onClick={onClick} aria-expanded={selected}>
      <div className="piano-card-visual">
        {piece.thumbnail ? (
          <img src={piece.thumbnail} alt={`${piece.title} score, page 1`} className="piano-card-thumb" loading="lazy" />
        ) : (
          <div className="piano-card-monogram">{monogram}</div>
        )}
      </div>

      <div className="piano-card-body">
        <span className={`piano-status-compact ${piece.status}`}>
          {statusLabel[piece.status]}
          {piece.videoUrl && <span className="piano-has-video" title="Recording available"> · ▶</span>}
        </span>
        <h4 className="piano-title">{piece.title}</h4>
        <p className="piano-composer">{piece.composer}</p>
        {piece.notes && <p className="piano-notes">{piece.notes}</p>}
      </div>
    </button>
  )
}
