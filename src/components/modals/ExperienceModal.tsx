import type { Experience } from '../../types'
import { useDmlPhotos } from '../../hooks/useDmlPhotos'
import { usePhotoCarousel } from '../../hooks/usePhotoCarousel'

interface ExperienceModalProps {
  experience: Experience
  onClose: () => void
}

function TeachingGallery() {
  const photos = useDmlPhotos()
  const { currentPhoto, setCurrentPhoto, nextPhoto, prevPhoto } = usePhotoCarousel(photos.length)

  if (photos.length === 0) return null

  const photo = photos[currentPhoto]

  return (
    <div className="teaching-gallery">
      <h4 className="book-modal-section-title">Teaching Gallery</h4>
      <div className="teaching-gallery-stage">
        <button className="carousel-arrow carousel-arrow-left" onClick={prevPhoto} aria-label="Previous photo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="teaching-gallery-image">
          <img src={photo.image} alt={photo.subtitle} />
          <p className="teaching-gallery-caption">{photo.subtitle}</p>
        </div>
        <button className="carousel-arrow carousel-arrow-right" onClick={nextPhoto} aria-label="Next photo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {photos.length > 1 && (
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
      )}
    </div>
  )
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content experience-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <div className="modal-header">
          {experience.details?.image && (
            <div className="modal-image-container">
              <img src={experience.details.image} alt={experience.company} className="modal-image" />
            </div>
          )}
          <div>
            <h3 className="modal-title">{experience.title}</h3>
            <p className="experience-modal-company">
              {experience.website ? (
                <a href={experience.website} target="_blank" rel="noopener noreferrer" className="experience-company-link">
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </p>
            <p className="experience-modal-meta">{experience.location} • {experience.period}</p>
          </div>
        </div>

        <div className="modal-body">
          {experience.personalNote && (
            <blockquote className="experience-personal-note">{experience.personalNote}</blockquote>
          )}

          {experience.details?.fullDescription.map((para, i) => (
            <p key={i} className="modal-paragraph" dangerouslySetInnerHTML={{
              __html: para.replace(/\n/g, '<br />')
            }} />
          ))}

          <div className="modal-tags">
            {experience.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          {experience.hasTeachingGallery && <TeachingGallery />}
        </div>
      </div>
    </div>
  )
}
