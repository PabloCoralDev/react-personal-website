import type { Book } from '../../types'

interface BookCardProps {
  book: Book
  onClick: () => void
  selected?: boolean
}

/** Card-less: the cover is the card, title and author sit underneath. */
export function BookCard({ book, onClick, selected = false }: BookCardProps) {
  return (
    <button className={`book-card${selected ? ' selected' : ''}`} onClick={onClick} aria-expanded={selected}>
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" loading="lazy" />
      </div>
      <span className={`book-status-compact ${book.status}`}>
        {book.status === 'complete' ? 'Finished' : 'Reading'}
      </span>
      <h4 className="book-title">{book.title}</h4>
      <p className="book-author">{book.author}</p>
    </button>
  )
}
