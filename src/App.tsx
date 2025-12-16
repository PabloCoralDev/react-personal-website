import { useEffect, useState } from 'react'
import './App.css'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  details?: {
    fullDescription: string[]
    images?: string[]
    github?: string
    demo?: string
    video?: string
    sheets?: string
  }
}

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  tags: string[]
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const softwareProjects: Project[] = [
    {
      title: 'VirtuoNext',
      description: 'Full-stack MVP for a bid-based booking platform matching soloists with accompanist pianists',
      tags: ['React', 'TypeScript', 'Supabase', 'Stripe API'],
      image: '/project_images/virtuonext.png',
      details: {
        fullDescription: [
          'Developed a full-stack MVP for VirtuoNext, a bid-based booking platform matching soloists with accompanist pianists',
          'Built with React and TypeScript, implemented asynchronous bidding logic, authentication, and relational data persistence using Supabase (SQL)',
          'Integrated in-app messaging via the open-source ChatScope Framework',
          'Currently implementing in-app payment processing through the Stripe API'
        ],
        github: 'https://github.com/PabloCoralDev/VirtuoNext_ReactMVP',
        demo: 'https://virtuonext.vercel.app/'
      }
    },
    {
      title: 'Differential Equations Playground',
      description: 'Full-stack application to deepen mathematical understanding and cross-language integration',
      tags: ['Python', 'React', 'FastAPI', 'Vercel'],
      image: '/project_images/diff-eqns.png',
      details: {
        fullDescription: [
          'Developing a full-stack differential equations playground to deepen mathematical understanding and cross-language integration',
          'Handling logic in a Python backend, and interfacing with a modern React front-end through FastAPI',
          'Hosting open-source on a Vercel + GitHub integration'
        ],
        github: 'https://github.com/PabloCoralDev/Differential_Equations_Playground'
      }
    },
    {
      title: 'FSD Truss Automation Pipeline',
      description: 'Automated Python pipeline for FSD (Fully Stressed Design) of 2D trusses',
      tags: ['Python', 'ABAQUS API', 'PowerShell'],
      image: '/project_images/fsd-truss.png',
      details: {
        fullDescription: [
          'Engineered an automated Python pipeline for FSD (Fully Stressed Design) of 2D trusses',
          'Integrating the ABAQUS API with async PowerShell communication to write and run .inp files',
          'Extract axial stress data, and perform iterative FSD checks',
          'Cutting manual workflow by 4+ hours'
        ],
        github: 'https://github.com/PabloCoralDev/Abaqus-Python-fully_stressed_method'
      }
    },
    {
      title: 'Dynamic Decision Matrix',
      description: 'Built a dynamic decision matrix using Google Sheets and JavaScript',
      tags: ['JavaScript', 'Google Sheets API', 'Data Analysis'],
      image: '/project_images/decision-matrix.png',
      details: {
        fullDescription: [
          'Built a dynamic decision matrix using Sheets and JavaScript + GS API',
          'Implemented 3 piecewise scoring functions with sensitivity scaling and anomaly filters',
          'Applied linear regression to the output scores to generate ranked car recommendations',
          'Tailored to desired cost, mileage and mpg'
        ],
        sheets: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTCVtAUelqurRjV4xumrZep8Ptkvn8AJ9DBHgum5hQvDlWraqsPq9BYhWdw1pwCYliq-bZXFNYj4W2f/pubhtml'
      }
    }
  ]

  const engineeringProjects: Project[] = [
    {
      title: 'Heat Transfer Device',
      description: 'Designed a heat-transfer device to smooth the sinusoidal heating profile of electric stoves',
      tags: ['SolidWorks', 'Fusion 360', 'CAM', 'DFM'],
      image: '/project_images/heat-transfer.png',
      details: {
        fullDescription: [
          'Designed a heat-transfer device to smooth the sinusoidal heating profile of electric stoves',
          'Using SolidWorks for design and Fusion360 for CAM',
          'Abiding by DFM principles and producing a design that is both hand and CNC machinable',
          'Using affordable, available parts from McMaster Carr'
        ]
      }
    },
    {
      title: 'Custom Steel Pen',
      description: 'Designed and machined a custom steel pen over 10+ iterations using a manual lathe',
      tags: ['Manual Lathe', 'Threading', 'Machining'],
      image: '/project_images/steel-pen.png',
      details: {
        fullDescription: [
          'Designed and machined a custom steel pen over 10+ iterations using a manual lathe',
          'Independently learned single-point threading techniques',
          'Iterated on design for manufacturability and precision'
        ]
      }
    },
    {
      title: 'Air Engine Components',
      description: 'Programmed, CNC-machined and assembled 5 components for an air engine',
      tags: ['Fusion 360', 'Haas VF-3', 'CNC', 'ACE Certified'],
      image: '/project_images/air-engine.png',
      details: {
        fullDescription: [
          'Programmed, CNC-machined and assembled 5 components for an air engine',
          'Using Fusion and a Haas VF-3 mill',
          'Earning the ACE CNC certificate'
        ]
      }
    }
  ]

  const experiences: Experience[] = [
    {
      title: 'Powerplant and Mechanical Systems Engineering Intern',
      company: 'Piper Aircraft Inc.',
      location: 'Vero Beach, FL',
      period: 'Jan 2024 – May 2024',
      description: [
        'Brief description of your key responsibilities at Piper Aircraft...',
        'Impact you made or results you achieved...'
      ],
      tags: ['Python', 'TensorFlow', 'Pandas', 'CFD', 'Blender']
    },
    {
      title: 'Teaching Assistant',
      company: 'Design and Manufacturing Lab, UF',
      location: 'Gainesville, FL',
      period: 'Aug 2024 – Present',
      description: [
        'Brief description of your teaching responsibilities...',
        'Impact on students or lab operations...'
      ],
      tags: ['Teaching', 'Machining', 'DFMA', 'GD&T', 'Safety']
    },
    {
      title: 'Founder and CEO',
      company: 'Bike Bros Gainesville',
      location: 'Gainesville, FL',
      period: 'May 2025 – Present',
      description: [
        'Brief description of what Bike Bros does...',
        'Impact on the community or business growth...'
      ],
      tags: ['Business', 'Operations', 'Sustainability']
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')}>ABOUT</button>
            <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
            <button onClick={() => scrollToSection('experience')}>EXPERIENCE</button>
            <button onClick={() => scrollToSection('contact')}>CONTACT</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-bg-text"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 30}px, ${(mousePosition.y - window.innerHeight / 2) / 30}px)`
          }}
        >
          PABLO CORAL
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="fade-in-up">Hi, I'm</span>
            <span className="fade-in-up delay-1">Pablo Coral</span>
          </h1>
          <p className="hero-subtitle fade-in-up delay-2">
            Aerospace Engineer & Full-Stack Developer bridging engineering precision with elegant code
          </p>
          <div className="hero-buttons fade-in-up delay-3">
            <div className="hero-buttons-row">
              <a href="https://github.com/pablocoraldev" target="_blank" rel="noopener noreferrer" className="hero-btn social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/pablo-coral" target="_blank" rel="noopener noreferrer" className="hero-btn social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            <div className="hero-buttons-row">
              <button onClick={() => scrollToSection('projects')} className="hero-btn cta-primary">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="hero-btn cta-secondary">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-content">
          <h2 className="section-label">A_</h2>
          <h3 className="section-title">About Me</h3>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm an Aerospace Engineering student at the University of Florida with a minor in Computer Science and a Bachelor of Music in Piano.
                I thrive at the intersection of engineering precision and creative problem-solving, building everything from predictive ML models
                at Piper Aircraft to full-stack web applications.
              </p>
              <p>
                When I'm not coding or designing systems, you'll find me performing piano with orchestras, training for triathlons,
                or running my bicycle refurbishment business. I believe in cultivating a holistic skillset across engineering, computer science,
                music, and athletics.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-item">React + TypeScript</div>
              <div className="skill-item">Python + TensorFlow</div>
              <div className="skill-item">C# .NET</div>
              <div className="skill-item">Flutter + Dart</div>
              <div className="skill-item">Node.js + Supabase</div>
              <div className="skill-item">SolidWorks + NX</div>
              <div className="skill-item">MATLAB + C++</div>
              <div className="skill-item">FastAPI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-content">
          <h2 className="section-label">P_</h2>
          <h3 className="section-title">Projects</h3>

          {/* Software Projects */}
          <div className="subsection">
            <h4 className="subsection-title">Software Projects</h4>
            <div className="projects-grid">
              {softwareProjects.map((project, index) => (
                <div
                  key={index}
                  className="project-card clickable"
                >
                  <div className="project-image-container" onClick={() => setSelectedProject(project)}>
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card-footer">
                    {project.details?.github && (
                      <a
                        href={project.details.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.details?.demo && (
                      <a
                        href={project.details.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="live-icon">
                          <circle cx="12" cy="12" r="2" fill="black"></circle>
                          <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-1"></circle>
                          <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-2"></circle>
                          <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-3"></circle>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.details?.sheets && (
                      <a
                        href={project.details.sheets}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                        Sheets
                      </a>
                    )}
                    <button className="project-details-btn" onClick={() => setSelectedProject(project)}>
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Projects */}
          <div className="subsection">
            <h4 className="subsection-title">Engineering Projects</h4>
            <div className="projects-grid">
              {engineeringProjects.map((project, index) => (
                <div
                  key={index}
                  className="project-card clickable"
                >
                  <div className="project-image-container" onClick={() => setSelectedProject(project)}>
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card-footer">
                    {project.details?.github && (
                      <a
                        href={project.details.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.details?.demo && (
                      <a
                        href={project.details.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="live-icon">
                          <circle cx="12" cy="12" r="2" fill="black"></circle>
                          <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-1"></circle>
                          <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-2"></circle>
                          <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="1.5" className="pulse-ring pulse-ring-3"></circle>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <button className="project-details-btn" onClick={() => setSelectedProject(project)}>
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-content">
          <h2 className="section-label">E_</h2>
          <h3 className="section-title">Work Experience</h3>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div>
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
                <div className="project-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-content">
          <h2 className="section-label">C_</h2>
          <h3 className="section-title">Let's Connect</h3>
          <div className="contact-content">
            <p className="contact-text">
              I'm always open to discussing engineering challenges, software projects, or opportunities where I can apply my unique blend of technical expertise and creative problem-solving.
            </p>
            <div className="contact-links">
              <a href="mailto:coral.pablo@ufl.edu" className="contact-link">
                <span>coral.pablo@ufl.edu</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="https://github.com/pablocoraldev" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>GitHub</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/pablo-coral" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="marquee">
          <div className="marquee-content">
            {Array(20).fill('PABLO CORAL').map((text, i) => (
              <span key={i}>{text} | </span>
            ))}
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-icon">{selectedProject.image}</div>
              <h3 className="modal-title">{selectedProject.title}</h3>
            </div>

            <div className="modal-body">
              {selectedProject.details?.fullDescription.map((para, i) => (
                <p key={i} className="modal-paragraph">{para}</p>
              ))}

              {selectedProject.details?.images && (
                <div className="modal-images">
                  {selectedProject.details.images.map((img, i) => (
                    <img key={i} src={img} alt={`${selectedProject.title} ${i + 1}`} />
                  ))}
                </div>
              )}

              <div className="modal-tags">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              {(selectedProject.details?.github || selectedProject.details?.demo || selectedProject.details?.video || selectedProject.details?.sheets) && (
                <div className="modal-links">
                  {selectedProject.details.github && (
                    <a href={selectedProject.details.github} target="_blank" rel="noopener noreferrer" className="modal-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Repo
                    </a>
                  )}
                  {selectedProject.details.sheets && (
                    <a href={selectedProject.details.sheets} target="_blank" rel="noopener noreferrer" className="modal-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      Google Sheets
                    </a>
                  )}
                  {selectedProject.details.demo && (
                    <a href={selectedProject.details.demo} target="_blank" rel="noopener noreferrer" className="modal-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="live-icon">
                        <circle cx="12" cy="12" r="2" fill="white"></circle>
                        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" className="pulse-ring pulse-ring-1"></circle>
                        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" className="pulse-ring pulse-ring-2"></circle>
                        <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" className="pulse-ring pulse-ring-3"></circle>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {selectedProject.details.video && (
                    <a href={selectedProject.details.video} target="_blank" rel="noopener noreferrer" className="modal-btn">
                      Watch Video
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
