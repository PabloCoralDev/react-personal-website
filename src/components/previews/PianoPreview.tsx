import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { pianoRepertoire } from '../../data/pianoRepertoire'
import { PianoPieceCard } from '../cards/PianoPieceCard'
import { Carousel } from '../Carousel'
import { shuffleArray } from '../../utils/shuffleArray'

export function PianoPreview() {
  const navigate = useNavigate()
  const preview = useMemo(() => shuffleArray(pianoRepertoire).slice(0, 8), [])

  return (
    <section id="piano" className="section piano-section">
      <div className="section-content">
        <h3 className="section-title">Piano Repertoire</h3>

        <Carousel
          label="Piano repertoire"
          items={preview}
          getKey={(piece) => `${piece.composer}-${piece.title}`}
          slideClassName="piano-slide"
          renderItem={(piece) => <PianoPieceCard piece={piece} onClick={() => navigate('/piano')} />}
        />

        <div className="see-more-wrap">
          <Link to="/piano" className="btn btn-secondary">See Full Repertoire →</Link>
        </div>
      </div>
    </section>
  )
}
