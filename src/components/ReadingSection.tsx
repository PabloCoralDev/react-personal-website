import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { Book } from '../types'
import { books } from '../data/books'
import { BookCard } from './cards/BookCard'
import { ListControls } from './ListControls'

type Status = Book['status']

const statusFilters: Array<{ value: Status | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'in-progress', label: 'Reading' },
  { value: 'complete', label: 'Finished' },
]

const groupLabel: Record<Status, string> = {
  'in-progress': 'Currently Reading',
  complete: 'Finished',
}

/** Inline detail row: spans the grid under the tapped cover instead of opening a modal. */
function BookDetail({ book, onClose }: { book: Book; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [book])

  return (
    <div ref={ref} className="piano-detail book-detail" role="region" aria-label={`${book.title} details`}>
      <button className="piano-detail-close" onClick={onClose} aria-label="Close details">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <h4 className="piano-detail-title">{book.title}</h4>
      <p className="piano-detail-composer">{book.author}</p>

      {book.details?.fullDescription.map((para, i) => (
        <p key={i} className="book-detail-text">{para}</p>
      ))}

      {book.details?.keyTakeaways && book.details.keyTakeaways.length > 0 && (
        <p className="book-detail-takeaways">
          <span className="filter-label">Takeaways</span>
          {book.details.keyTakeaways.join(' · ')}
        </p>
      )}
    </div>
  )
}

export function ReadingSection() {
  const { state } = useLocation()
  const [selected, setSelected] = useState<string | null>((state as { book?: string } | null)?.book ?? null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all')

  const groups = useMemo(() => {
    const query = search.trim().toLowerCase()
    const matches = books.filter(
      (b) =>
        (statusFilter === 'all' || b.status === statusFilter) &&
        (!query || b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query)),
    )
    return (['in-progress', 'complete'] as Status[])
      .map((status) => ({ status, books: matches.filter((b) => b.status === status) }))
      .filter((g) => g.books.length > 0)
  }, [search, statusFilter])

  return (
    <section id="reading" className="section reading-section">
      <div className="section-content">
        <h3 className="section-title">Library</h3>
        <p className="section-subtitle library-credit">
          Covers courtesy of <a href="https://openlibrary.org/dev/docs/api/covers" target="_blank" rel="noopener noreferrer">Open Library</a>
        </p>

        <ListControls
          search={search}
          onSearch={setSearch}
          placeholder="Search title or author"
          filters={[{ label: 'Status', options: statusFilters, value: statusFilter, onChange: (v) => setStatusFilter(v as Status | 'all') }]}
        />

        {groups.length === 0 && <p className="piano-empty-state">No books match your search.</p>}

        {groups.map((group) => (
          <div key={group.status} className="piano-group">
            <h4 className="piano-group-title">
              {groupLabel[group.status]}
              <span className="piano-group-count">{group.books.length}</span>
            </h4>
            <div className="books-grid">
              {group.books.map((book) => {
                const isSelected = book.title === selected
                return (
                  <Fragment key={book.title}>
                    <BookCard book={book} selected={isSelected} onClick={() => setSelected(isSelected ? null : book.title)} />
                    {isSelected && <BookDetail book={book} onClose={() => setSelected(null)} />}
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
