import { useState } from 'react'
import type { Book } from '../types'
import { books } from '../data/books'
import { BookCard } from './cards/BookCard'
import { BookModal } from './modals/BookModal'

export function ReadingSection() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  return (
    <section id="reading" className="section reading-section">
      <div className="section-content">
        <h3 className="section-title">Library</h3>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
          marginTop: '-1rem',
          marginBottom: '3rem',
          opacity: 0.8
        }}>
          Book Covers Courtesy of <a href="https://openlibrary.org/dev/docs/api/covers" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontStyle: 'italic' }}>Open Library Covers API</a>
        </p>
        <div className="books-grid">
          {books.map((book, index) => (
            <BookCard key={index} book={book} onClick={() => setSelectedBook(book)} />
          ))}
        </div>
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </section>
  )
}
