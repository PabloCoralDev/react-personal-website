import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../cards/ProjectCard'
import { Carousel } from '../Carousel'

export function ProjectsPreview() {
  const navigate = useNavigate()

  // Warm the cache while the visitor reads the home page, so /projects opens with its photos ready.
  useEffect(() => {
    const warm = () => {
      projects.forEach((p) => {
        ;[p.outer_image, p.isVideo ? undefined : p.inner_image].forEach((src) => {
          if (src) new Image().src = src
        })
      })
    }
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500))
    const id = idle(warm)
    return () => (window.cancelIdleCallback ?? window.clearTimeout)(id)
  }, [])

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <h3 className="section-title">Projects</h3>

        <Carousel
          label="Projects"
          items={projects}
          getKey={(project) => project.title}
          slideClassName="projects-slide"
          renderItem={(project) => <ProjectCard project={project} onClick={() => navigate('/projects', { state: { project: project.slug } })} />}
        />

        <div className="see-more-wrap">
          <Link to="/projects" className="btn btn-secondary">See All Projects →</Link>
        </div>
      </div>
    </section>
  )
}
