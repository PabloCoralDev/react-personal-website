import { useState } from 'react'
import type { Project } from '../types'
import { projects } from '../data/projects'
import { ProjectCard } from './cards/ProjectCard'
import { ProjectModal } from './modals/ProjectModal'

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <h3 className="section-title">Projects</h3>
        <p className="section-subtitle">Hover over the images !</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
