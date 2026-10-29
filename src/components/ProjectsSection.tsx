import { useCallback, useEffect, useState, type ImgHTMLAttributes } from 'react'
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

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#181717" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function SheetsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 1H5.5A2.5 2.5 0 0 0 3 3.5v17A2.5 2.5 0 0 0 5.5 23h13a2.5 2.5 0 0 0 2.5-2.5V7.5z" fill="#0F9D58" />
      <path d="M14.5 1v4.5A2 2 0 0 0 16.5 7.5H21z" fill="#87CEAC" />
      <path d="M7 11h10v8H7zm1.5 1.5v1.75h3v-1.75zm4.5 0v1.75h2.5v-1.75zm-4.5 3.25v1.75h3v-1.75zm4.5 0v1.75h2.5v-1.75z" fill="#fff" />
    </svg>
  )
}

/** Fades an image in once decoded, over the grey placeholder. */
function FadeImage({ eager, ...props }: ImgHTMLAttributes<HTMLImageElement> & { eager?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      {...props}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={loaded ? 'is-loaded' : ''}
      onLoad={() => setLoaded(true)}
      ref={(el) => {
        if (el?.complete && el.naturalWidth && !loaded) setLoaded(true)
      }}
    />
  )
}

function ProjectMedia({ project, eager }: { project: Project; eager: boolean }) {
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
                <FadeImage src={s.src} alt={`${project.title} — ${s.label.toLowerCase()}`} eager={eager} />
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

function ProjectEntry({ project, eager }: { project: Project; eager: boolean }) {
  const { details } = project

  return (
    <article id={`project-${project.slug}`} className="project-entry">
      <ProjectMedia project={project} eager={eager} />

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
              <a href={details.github} target="_blank" rel="noopener noreferrer" className="app-link">
                <GitHubIcon />
                View on GitHub
              </a>
            )}
            {details.sheets && (
              <a href={details.sheets} target="_blank" rel="noopener noreferrer" className="app-link">
                <SheetsIcon />
                Open in Google Sheets
              </a>
            )}
            {details.demo && (
              <a href={details.demo} target="_blank" rel="noopener noreferrer" className="app-link">
                Live demo
              </a>
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
  const { state, hash } = useLocation()
  const target = (state as { project?: string } | null)?.project
  // Shareable deep link: /projects#<slug> (e.g. /projects#adaptive-bollinger)
  const hashSlug = hash.slice(1).replace(/^project-/, '')
  const linked = projects.some((p) => p.slug === hashSlug) ? hashSlug : null

  // Arriving from a home-page carousel tap: land on that project.
  useEffect(() => {
    if (target) requestAnimationFrame(() => jumpTo(target))
  }, [target])

  // Arriving from a shared link: jump straight there, no scroll animation.
  useEffect(() => {
    if (linked) {
      requestAnimationFrame(() =>
        document.getElementById(`project-${linked}`)?.scrollIntoView({ behavior: 'instant', block: 'start' }),
      )
    }
  }, [linked])

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
              <img src={p.outer_image} alt="" />
              <span>{number(p.slug)}</span>
            </button>
          ))}
        </nav>

        <div className="project-list">
          {visible.map((p, i) => (
            <ProjectEntry key={p.slug} project={p} eager={i < 2} />
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
