import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../cards/ProjectCard'

export function ProjectsPreview() {
  const navigate = useNavigate()
  const preview = projects.slice(0, 3)

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <h3 className="section-title">Projects</h3>

        <div className="projects-preview-row">
          {preview.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => navigate('/projects')} compact />
          ))}
        </div>

        <div className="see-more-wrap">
          <Link to="/projects" className="see-more-link">See All Projects →</Link>
        </div>
      </div>
    </section>
  )
}
