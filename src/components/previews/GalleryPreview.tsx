import { Link } from 'react-router-dom'
import { photos } from '../../data/photos'

export function GalleryPreview() {
  const preview = photos.slice(0, 4)

  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-content">
        <h3 className="section-title">Through My Lens</h3>
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
          marginTop: '-1rem',
          marginBottom: '3rem',
          opacity: 0.8
        }}>A few moments from life outside the screen.</p>

        <Link to="/gallery" className="gallery-preview-grid">
          {preview.map((photo, index) => (
            <div className="gallery-preview-tile" key={index}>
              <img src={photo.image} alt={photo.subtitle} />
              {index === preview.length - 1 && (
                <div className="gallery-preview-overlay">See More →</div>
              )}
            </div>
          ))}
        </Link>
      </div>
    </section>
  )
}
