import type { Experience } from '../../types'

interface ExperienceCardProps {
  experience: Experience
  onClick: () => void
}

export function ExperienceCard({ experience: exp, onClick }: ExperienceCardProps) {
  return (
    <div
      className={`experience-card ${exp.details ? 'clickable' : ''}`}
      onClick={() => exp.details && onClick()}
    >
      <div className="experience-header">
        <div>
          {exp.logo && (
            <div className="experience-logo">
              <img src={exp.logo} alt={`${exp.company} logo`} />
            </div>
          )}
          <h4 className="experience-title">{exp.title}</h4>
          <p className="experience-company">{exp.company}</p>
          <p className="experience-location">{exp.location}</p>
        </div>
        <span className="experience-period">{exp.period}</span>
      </div>
      <ul className="experience-description">
        {exp.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {exp.personalNote && (
        <blockquote className="experience-personal-note">{exp.personalNote}</blockquote>
      )}
      <div className="project-tags">
        {exp.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      {exp.details && (
        <button className="project-details-btn" style={{ marginTop: '1rem' }}>
          View Details →
        </button>
      )}
    </div>
  )
}
