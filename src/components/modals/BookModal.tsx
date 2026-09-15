import type { Book } from '../../types'

interface BookModalProps {
  book: Book
  onClose: () => void
}

export function BookModal({ book, onClose }: BookModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content book-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <div className="book-modal-header">
          <h3 className="book-modal-title">{book.title}</h3>
          <p className="book-modal-author">by {book.author}</p>
          <span className={`book-status ${book.status}`}>
            {book.status === 'in-progress' && <span className="status-dot"></span>}
            {book.status === 'complete' ? 'Complete' : 'Currently Reading'}
          </span>
        </div>

        <div className="book-modal-body">
          <h4 className="book-modal-section-title">What I Learned</h4>
          {book.details?.fullDescription.map((para, i) => (
            <p key={i} className="book-modal-paragraph">{para}</p>
          ))}

          {book.details?.keyTakeaways && book.details.keyTakeaways.length > 0 && (
            <>
              <h4 className="book-modal-section-title">Key Takeaways</h4>
              <div className="book-takeaways-grid">
                {book.details.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="book-takeaway-item">{takeaway}</div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
