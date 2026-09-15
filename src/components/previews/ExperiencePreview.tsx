import { Link, useNavigate } from 'react-router-dom'
import { experiences } from '../../data/experiences'
import { ExperienceCard } from '../cards/ExperienceCard'

export function ExperiencePreview() {
  const navigate = useNavigate()
  const preview = experiences.slice(0, 3)

  return (
    <section id="experience" className="section experience-section">
      <div className="section-content">
        <h3 className="section-title">Work Experience</h3>
        <div className="experience-grid">
          {preview.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} onClick={() => navigate('/experience')} />
          ))}
        </div>

        <div className="see-more-wrap">
          <Link to="/experience" className="see-more-link">See All Experience →</Link>
        </div>
      </div>
    </section>
  )
}
