export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <h3 className="section-title">About Me</h3>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              Aerospace Engineering and Piano Performance double-major at the University of Florida,
              living at the intersection of <em>precision and creativity</em>
            </p>
            <p>
              I love to build. handcrafted machined parts, ML models for engineering analysis, and full-stack apps. After school, I'm at the piano, training for triathlons, doing handstands, or running my
              bike-refurbishing business!
            </p>
            <div className="about-tags">
              <span className="about-tag">🚀 Engineer</span>
              <span className="about-tag">🎹 Pianist</span>
              <span className="about-tag">🛠️ Builder</span>
              <span className="about-tag">🏊 Triathlete</span>
            </div>
            <blockquote className="about-quote">
              <p className="quote-text">"We are what we repeatedly do. Excellence, then, is not an act, but a habit."</p>
              <cite className="quote-author">— Aristotle</cite>
            </blockquote>
          </div>
          <div className="about-photo">
            {/* Placeholder — swap for a favorite candid shot of yourself */}
            <img src="/pictures/acadia_picture_1.png" alt="Pablo Coral" />
            <div className="about-photo-tag">
              <span className="about-photo-dot"></span>
              Acadia National Park, Maine
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
