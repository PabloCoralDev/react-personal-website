import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { books } from '../../data/books'
import { BookCard } from '../cards/BookCard'
import { Carousel } from '../Carousel'
import { shuffleArray } from '../../utils/shuffleArray'

export function LibraryPreview() {
  const navigate = useNavigate()
  const preview = useMemo(() => shuffleArray(books).slice(0, 8), [])

  return (
    <section id="reading" className="section reading-section">
      <div className="section-content">
        <h3 className="section-title">Library</h3>
        <p className="section-subtitle">Today's Pick</p>

        <Carousel
          label="Library"
          items={preview}
          getKey={(book) => book.title}
          slideClassName="library-slide"
          renderItem={(book) => <BookCard book={book} onClick={() => navigate('/library', { state: { book: book.title } })} />}
        />

        <div className="see-more-wrap">
          <Link to="/library" className="btn btn-secondary">See Full Library →</Link>
        </div>
      </div>
    </section>
  )
}
