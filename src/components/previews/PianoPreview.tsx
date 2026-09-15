import { useMemo, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { pianoRepertoire } from '../../data/pianoRepertoire'
import { PianoPieceCard } from '../cards/PianoPieceCard'
import { shuffleArray } from '../../utils/shuffleArray'

export function PianoPreview() {
  const navigate = useNavigate()
  const preview = useMemo(() => shuffleArray(pianoRepertoire).slice(0, 8), [])
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' })
  }

  return (
    <section id="piano" className="section piano-section">
      <div className="section-content">
        <h3 className="section-title">Piano Repertoire</h3>

        <div className="carousel-nav-row">
          <button className="carousel-arrow carousel-arrow-left" onClick={() => scrollByCards(-1)} aria-label="Scroll left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="piano-preview-carousel" ref={scrollerRef}>
            {preview.map((piece, index) => (
              <PianoPieceCard key={index} piece={piece} onClick={() => navigate('/piano')} />
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={() => scrollByCards(1)} aria-label="Scroll right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="see-more-wrap">
          <Link to="/piano" className="see-more-link">See Full Repertoire →</Link>
        </div>
      </div>
    </section>
  )
}
