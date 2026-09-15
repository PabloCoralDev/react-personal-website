export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-content">
        <div className="contact-wrapper">
          <div className="contact-content">
            <h3 className="section-title">Let's Connect</h3>
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
          <div className="polaroid">
            <div className="polaroid-image">
              <img src="/pictures/pablo-contact-pic.jpg" alt="Pablo Coral" />
            </div>
            <div className="polaroid-caption">Pablo Coral</div>
          </div>
        </div>
      </div>
    </section>
  )
}
