import { usePhotoCarousel } from '../hooks/usePhotoCarousel'
import { photos } from '../data/photos'

export function Gallery() {
  const { currentPhoto, setCurrentPhoto, nextPhoto, prevPhoto } = usePhotoCarousel(photos.length)

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

        <div className="carousel">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevPhoto} aria-label="Previous photo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-stage">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentPhoto ? 'active' : ''}`}
                aria-hidden={index !== currentPhoto}
              >
                {photo.portrait && (
                  <div className="carousel-image-bg" style={{ backgroundImage: `url(${photo.image})` }} aria-hidden="true" />
                )}
                <img src={photo.image} alt={photo.subtitle} className={`carousel-image ${photo.portrait ? 'carousel-image-portrait' : ''}`} />
                <div className="carousel-caption">
                  <span className="carousel-index">
                    {String(index + 1).padStart(2, '0')} <span className="carousel-index-total">/ {String(photos.length).padStart(2, '0')}</span>
                  </span>
                  <h4 className="carousel-subtitle">{photo.subtitle}</h4>
                  <p className="carousel-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {photo.location}
                    {photo.date && <span className="carousel-date"> · {photo.date}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={nextPhoto} aria-label="Next photo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentPhoto ? 'active' : ''}`}
              onClick={() => setCurrentPhoto(index)}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
