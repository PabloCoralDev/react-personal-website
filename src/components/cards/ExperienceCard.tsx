import type { Experience } from '../../types'

interface ExperienceCardProps {
  experience: Experience
  onClick: () => void
  compact?: boolean
}

/** Outbound link in the shared app-link style: Instagram shows its glyph and @handle, other sites a globe and bare domain. */
function WebsiteLink({ href }: { href: string }) {
  const url = new URL(href)
  const host = url.hostname.replace(/^www\./, '')
  const instagram = host === 'instagram.com'

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="app-link" onClick={(e) => e.stopPropagation()}>
      {instagram ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="#E4405F" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z" />
        </svg>
      )}
      {instagram ? `@${url.pathname.replace(/\//g, '')}` : host}
    </a>
  )
}

export function ExperienceCard({ experience: exp, onClick, compact = false }: ExperienceCardProps) {
  if (compact) {
    return (
      <article className="experience-review">
        <div className="experience-review-head">
          {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="experience-review-logo" />}
          <div>
            <h4 className="experience-review-title">{exp.title}</h4>
            <p className="experience-review-company">{exp.company}</p>
            <p className="experience-review-meta">{exp.location} · {exp.period}</p>
          </div>
        </div>
        <p className="experience-review-summary">{exp.description[0]}</p>
        <div className="experience-skills">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        {(exp.details || exp.website) && (
          <div className="experience-review-actions">
            {exp.details && <button className="text-link" onClick={onClick}>View details →</button>}
            {exp.website && <WebsiteLink href={exp.website} />}
          </div>
        )}
      </article>
    )
  }

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
      {exp.website && (
        <div className="experience-card-links" onClick={(e) => e.stopPropagation()}>
          <WebsiteLink href={exp.website} />
        </div>
      )}
      <div className="project-tags">
        {exp.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      {exp.details && (
        <button className="btn btn-primary project-details-btn" style={{ marginTop: '1rem' }}>
          View Details →
        </button>
      )}
    </div>
  )
}
