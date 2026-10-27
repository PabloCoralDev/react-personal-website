import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import type { Project } from '../types'
import { projects, toolbox } from '../data/projects'

type CategoryFilter = 'All' | Project['category']

const filters: CategoryFilter[] = ['All', 'Hardware', 'Software']

const number = (slug: string) => String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, '0')

const jumpTo = (slug: string) => {
  document.getElementById(`project-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Splits a template-literal description into paragraphs, keeping single line breaks. */
const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.split('\n').map((line) => line.trim()).join('<br />'))
    .filter(Boolean)

function ProjectMedia({ project }: { project: Project }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selected, setSelected] = useState(0)

  const slides = [{ label: 'Overview', src: project.outer_image, video: false }]
  if (project.inner_image) {
    slides.push({ label: project.isVideo ? 'In motion' : 'Detail', src: project.inner_image, video: !!project.isVideo })
  }

  const onSelect = useCallback(() => setSelected(emblaApi?.selectedScrollSnap() ?? 0), [emblaApi])
  useEffect(() => {
    emblaApi?.on('select', onSelect)
    return () => {
      emblaApi?.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="project-media">
      <div className="project-media-viewport" ref={emblaRef}>
        <div className="project-media-track">
          {slides.map((s) => (
            <div key={s.src} className="project-media-slide">
              {s.video ? (
                <video autoPlay loop muted playsInline aria-label={`${project.title} in motion`}>
                  <source src={s.src} type="video/mp4" />
                </video>
              ) : (
                <img src={s.src} alt={`${project.title} — ${s.label.toLowerCase()}`} loading="lazy" />
              )}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="project-media-toggle" role="tablist" aria-label="Photos">
          {slides.map((s, i) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={selected === i}
              className={selected === i ? 'active' : ''}
              onClick={() => emblaApi?.scrollTo(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectEntry({ project }: { project: Project }) {
  const { details } = project

  return (
    <article id={`project-${project.slug}`} className="project-entry">
      <ProjectMedia project={project} />

      <div className="project-entry-body">
        <p className="project-eyebrow">
          <span className="project-number">{number(project.slug)}</span>
          {project.category} · {project.field}
        </p>
        <h4 className="project-entry-title">{project.title}</h4>
        <p className="project-entry-summary" dangerouslySetInnerHTML={{ __html: project.description }} />

        {project.stats && (
          <dl className="project-stats">
            {project.stats.map((s) => (
              <div key={s.label} className="project-stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="project-skills">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {(details?.github || details?.sheets || details?.demo) && (
          <div className="project-entry-links">
            {details.github && (
              <a href={details.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub ↗</a>
            )}
            {details.sheets && (
              <a href={details.sheets} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Open the sheet ↗</a>
            )}
            {details.demo && (
              <a href={details.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live demo ↗</a>
            )}
          </div>
        )}

        {details && (
          <details className="project-story">
            <summary>The build story</summary>
            {details.fullDescription.flatMap(paragraphs).map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </details>
        )}
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<CategoryFilter>('All')
  const { state } = useLocation()
  const target = (state as { project?: string } | null)?.project

  // Arriving from a home-page carousel tap: land on that project.
  useEffect(() => {
    if (target) requestAnimationFrame(() => jumpTo(target))
  }, [target])

  const visible = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <h3 className="section-title">Projects</h3>
        <p className="section-subtitle">Things I've designed, machined and coded. Swipe the photos for a closer look.</p>

        <div className="piano-filter-pills project-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`btn btn-secondary piano-filter-pill ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <nav className="project-index" aria-label="Jump to project">
          {visible.map((p) => (
            <button key={p.slug} className="project-index-item" onClick={() => jumpTo(p.slug)}>
              <img src={p.outer_image} alt="" loading="lazy" />
              <span>{number(p.slug)}</span>
            </button>
          ))}
        </nav>

        <div className="project-list">
          {visible.map((p) => (
            <ProjectEntry key={p.slug} project={p} />
          ))}
        </div>

        <h4 className="strava-subheading">Toolbox</h4>
        <table className="strava-table project-toolbox">
          <thead>
            <tr>
              <th>Area</th>
              <th className="strava-col-detail">Tools</th>
              <th>Used in</th>
            </tr>
          </thead>
          <tbody>
            {toolbox.map((row) => (
              <tr key={row.area}>
                <td>
                  <span className="strava-col-strong">{row.area}</span>
                  <span className="strava-col-sub project-toolbox-tools">{row.tools}</span>
                </td>
                <td className="strava-col-muted strava-col-detail">{row.tools}</td>
                <td>
                  <span className="project-toolbox-used">
                    {row.used.map((slug) => (
                      <button
                        key={slug}
                        onClick={() => {
                          setFilter('All')
                          requestAnimationFrame(() => jumpTo(slug))
                        }}
                        aria-label={`Jump to ${projects.find((p) => p.slug === slug)?.title}`}
                      >
                        {number(slug)}
                      </button>
                    ))}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
