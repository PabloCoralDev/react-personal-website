import { useMemo, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { books } from '../../data/books'
import { BookCard } from '../cards/BookCard'
import { shuffleArray } from '../../utils/shuffleArray'

export function LibraryPreview() {
  const navigate = useNavigate()
  const preview = useMemo(() => shuffleArray(books).slice(0, 8), [])
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' })
  }

  return (
    <section id="reading" className="section reading-section">
      <div className="section-content">
        <h3 className="section-title">Library</h3>
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
          marginTop: '-1rem',
          marginBottom: '2rem',
          opacity: 0.8}}>Today's Pick</p>

        <div className="carousel-nav-row">
          <button className="carousel-arrow carousel-arrow-left" onClick={() => scrollByCards(-1)} aria-label="Scroll left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="library-preview-carousel" ref={scrollerRef}>
            {preview.map((book, index) => (
              <BookCard key={index} book={book} onClick={() => navigate('/library')} />
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={() => scrollByCards(1)} aria-label="Scroll right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="see-more-wrap">
          <Link to="/library" className="see-more-link">See Full Library →</Link>
        </div>
      </div>
    </section>
  )
}
