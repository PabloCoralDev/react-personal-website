import type { Project } from '../../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-image-container">
            {project.isVideo && project.inner_image ? (
              <video autoPlay loop muted playsInline className="modal-image">
                <source src={project.inner_image} type="video/mp4" />
              </video>
            ) : (
              <img src={project.inner_image || project.outer_image} alt={project.title} className="modal-image" />
            )}
          </div>
          <h3 className="modal-title">{project.title}</h3>
        </div>

        <div className="modal-body">
          {project.details?.fullDescription.map((para, i) => (
            <p key={i} className="modal-paragraph" dangerouslySetInnerHTML={{
              __html: para.replace(/\n/g, '<br />')
            }} />
          ))}

          {project.details?.images && (
            <div className="modal-images">
              {project.details.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} ${i + 1}`} />
              ))}
            </div>
          )}

          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          {(project.details?.github || project.details?.demo || project.details?.video || project.details?.sheets) && (
            <div className="modal-links">
              {project.details.github && (
                <a href={project.details.github} target="_blank" rel="noopener noreferrer" className="modal-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repo
                </a>
              )}
              {project.details.sheets && (
                <a href={project.details.sheets} target="_blank" rel="noopener noreferrer" className="modal-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  Google Sheets
                </a>
              )}
              {project.details.demo && (
                <a href={project.details.demo} target="_blank" rel="noopener noreferrer" className="modal-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="live-icon">
                    <circle cx="12" cy="12" r="2" fill="white"></circle>
                    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" className="pulse-ring pulse-ring-1"></circle>
                    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" className="pulse-ring pulse-ring-2"></circle>
                    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" className="pulse-ring pulse-ring-3"></circle>
                  </svg>
                  Live Demo
                </a>
              )}
              {project.details.video && (
                <a href={project.details.video} target="_blank" rel="noopener noreferrer" className="modal-btn">
                  Watch Video
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
