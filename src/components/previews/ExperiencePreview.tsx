import { Link, useNavigate } from 'react-router-dom'
import { experiences } from '../../data/experiences'
import { ExperienceCard } from '../cards/ExperienceCard'
import { Carousel } from '../Carousel'

export function ExperiencePreview() {
  const navigate = useNavigate()

  return (
    <section id="experience" className="section experience-section">
      <div className="section-content">
        <h3 className="section-title">Work Experience</h3>

        <Carousel
          label="Work experience"
          items={experiences}
          getKey={(exp) => `${exp.company}-${exp.title}`}
          slideClassName="experience-slide"
          renderItem={(exp) => <ExperienceCard experience={exp} onClick={() => navigate('/experience')} compact />}
        />

        <div className="see-more-wrap">
          <Link to="/experience" className="btn btn-secondary">See All Experience →</Link>
        </div>
      </div>
    </section>
  )
}
