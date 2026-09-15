import type { PianoPiece } from '../../types'
import { getYouTubeEmbedUrl } from '../../utils/youtube'

interface PianoPieceModalProps {
  piece: PianoPiece
  onClose: () => void
}

const statusLabel: Record<PianoPiece['status'], string> = {
  performed: 'Performed',
  'in-progress': 'In Progress',
  'up-next': 'Up Next',
}

export function PianoPieceModal({ piece, onClose }: PianoPieceModalProps) {
  const embedPdf = piece.pdfLocation || piece.imslpPdfUrl
  const videoEmbed = piece.videoUrl ? getYouTubeEmbedUrl(piece.videoUrl) : null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content piano-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <div className="book-modal-header">
          <h3 className="book-modal-title">{piece.title}</h3>
          <p className="book-modal-author">{piece.composer}</p>
          <span className={`book-status ${piece.status}`}>
            {piece.status === 'in-progress' && <span className="status-dot"></span>}
            {statusLabel[piece.status]}
          </span>
          {piece.notes && <p className="piano-modal-notes">{piece.notes}</p>}
        </div>

        <div className="book-modal-body">
          {embedPdf && (
            <>
              <h4 className="book-modal-section-title">Score</h4>
              <iframe src={embedPdf} title={`${piece.title} score`} className="piano-pdf-embed" />
            </>
          )}

          {piece.imslpUrl && (
            <a
              href={piece.imslpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn piano-imslp-btn"
            >
              View on IMSLP ↗
            </a>
          )}

          {videoEmbed && (
            <>
              <h4 className="book-modal-section-title">Recording</h4>
              <div className="piano-video-embed">
                <iframe
                  src={videoEmbed}
                  title={`${piece.title} recording`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
