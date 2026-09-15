import type { PianoPiece } from '../../types'

interface PianoPieceCardProps {
  piece: PianoPiece
  onClick: () => void
}

const statusLabel: Record<PianoPiece['status'], string> = {
  performed: 'Performed',
  'in-progress': 'In Progress',
  'up-next': 'Up Next',
}

export function PianoPieceCard({ piece, onClick }: PianoPieceCardProps) {
  const hasVideo = Boolean(piece.videoUrl)
  const monogram = piece.composer.trim().charAt(0).toUpperCase()

  return (
    <div className="piano-card clickable" onClick={onClick}>
      <div className="piano-card-visual">
        {piece.thumbnail ? (
          <img src={piece.thumbnail} alt={`${piece.title} score, page 1`} className="piano-card-thumb" />
        ) : (
          <div className="piano-card-monogram">{monogram}</div>
        )}
      </div>

      <div className="piano-card-body">
        <span className={`piano-status-compact ${piece.status}`}>
          {piece.status === 'in-progress' && <span className="status-dot-small"></span>}
          {statusLabel[piece.status]}
        </span>
        <h4 className="piano-title">{piece.title}</h4>
        <p className="piano-composer">{piece.composer}</p>
        {piece.notes && <p className="piano-notes">{piece.notes}</p>}
        {hasVideo && (
          <div className="piano-card-icons">
            <span className="piano-icon" title="Recording available">▶</span>
          </div>
        )}
      </div>
    </div>
  )
}
