import type { Book } from '../../types'

interface BookCardProps {
  book: Book
  onClick: () => void
}

export function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div className="book-card clickable" onClick={onClick}>
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
      </div>
      <div className="book-header-compact">
        <h4 className="book-title">{book.title}</h4>
        <span className={`book-status-compact ${book.status}`}>
          {book.status === 'in-progress' && <span className="status-dot-small"></span>}
          {book.status === 'complete' ? 'Complete' : 'Reading'}
        </span>
      </div>
      <p className="book-author">by {book.author}</p>
      <button className="book-lessons-btn">
        Lessons Learned →
      </button>
    </div>
  )
}
