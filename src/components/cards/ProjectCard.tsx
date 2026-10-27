import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

/** Home-carousel tile: the picture is the card. */
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="project-card-compact" onClick={onClick}>
      <img src={project.outer_image} alt={project.title} className="project-thumb" loading="lazy" />
      <h5 className="project-title">{project.title}</h5>
    </div>
  )
}
