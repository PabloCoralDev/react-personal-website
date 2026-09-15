import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  compact?: boolean
}

export function ProjectCard({ project, onClick, compact = false }: ProjectCardProps) {
  if (compact) {
    return (
      <div className="project-card project-card-compact clickable" onClick={onClick}>
        <div className="project-image-container project-image-square">
          <img src={project.outer_image} alt={project.title} className="project-image" />
        </div>
        <h5 className="project-title">{project.title}</h5>
      </div>
    )
  }

  return (
    <div className="project-card clickable" onClick={onClick}>
      {project.inner_image ? (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={project.outer_image} alt={project.title} />
            </div>
            <div className="flip-card-back">
              {project.isVideo ? (
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.25rem' }}>
                  <source src={project.inner_image} type="video/mp4" />
                </video>
              ) : (
                <img src={project.inner_image} alt={`${project.title} - Back`} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="project-image-container">
          <img src={project.outer_image} alt={project.title} className="project-image" />
        </div>
      )}
      <h5 className="project-title">{project.title}</h5>
      <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-card-footer">
        {project.details?.github && (
          <a
            href={project.details.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {project.details?.demo && (
          <a
            href={project.details.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="live-icon">
              <circle cx="12" cy="12" r="2" fill="black"></circle>
              <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-1"></circle>
              <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-2"></circle>
              <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-3"></circle>
            </svg>
            Live Demo
          </a>
        )}
        {project.details?.sheets && (
           <a
            href={project.details.sheets}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            Explore the Sheet!
          </a>
        )}
        <button className="project-details-btn">
          View Details →
        </button>
      </div>
    </div>
  )
}
