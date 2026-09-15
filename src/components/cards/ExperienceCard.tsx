import type { Experience } from '../../types'

interface ExperienceCardProps {
  experience: Experience
  onClick: () => void
  compact?: boolean
}

export function ExperienceCard({ experience: exp, onClick, compact = false }: ExperienceCardProps) {
  const description = compact ? exp.description.slice(0, 1) : exp.description
  const tags = compact ? exp.tags.slice(0, 3) : exp.tags
  const hiddenTagCount = exp.tags.length - tags.length

  return (
    <div
      className={`experience-card ${compact ? 'experience-card-compact' : ''} ${exp.details ? 'clickable' : ''}`}
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
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {!compact && exp.personalNote && (
        <blockquote className="experience-personal-note">{exp.personalNote}</blockquote>
      )}
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
        {hiddenTagCount > 0 && <span className="tag">+{hiddenTagCount}</span>}
      </div>
      {exp.details && (
        <button className="project-details-btn" style={{ marginTop: '1rem' }}>
          View Details →
        </button>
      )}
    </div>
  )
}
