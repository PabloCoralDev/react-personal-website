import { Link } from 'react-router-dom'
import { StarfieldBackground } from '../components/StarfieldBackground'

export function NotFoundPage() {
  return (
    <div className="starfield-page">
      <StarfieldBackground />
      <section className="section">
        <div className="section-content" style={{ textAlign: 'center' }}>
          <h2 className="section-label">404</h2>
          <h3 className="section-title">Page not found</h3>
          <p style={{ marginBottom: '2rem' }}>The page you're looking for doesn't exist.</p>
          <Link to="/" className="hero-btn cta-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
