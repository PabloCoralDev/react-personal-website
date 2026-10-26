import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../cards/ProjectCard'
import { Carousel } from '../Carousel'

export function ProjectsPreview() {
  const navigate = useNavigate()

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <h3 className="section-title">Projects</h3>

        <Carousel
          label="Projects"
          items={projects}
          getKey={(project) => project.title}
          slideClassName="projects-slide"
          renderItem={(project) => <ProjectCard project={project} onClick={() => navigate('/projects')} compact />}
        />

        <div className="see-more-wrap">
          <Link to="/projects" className="btn btn-secondary">See All Projects →</Link>
        </div>
      </div>
    </section>
  )
}
