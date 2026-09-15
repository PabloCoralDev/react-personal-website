import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const goToContact = () => {
    if (location.pathname === '/') {
      scrollToSection('contact')
    } else {
      navigate('/', { state: { scrollTo: 'contact' } })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-name">Pablo Coral</span>
          <p className="footer-tagline">Engineer, Developer and Musician with a passion for quality work.</p>
        </div>

        <div className="footer-links">
          <button onClick={goToContact}>Contact</button>
          <a href="https://github.com/pablocoraldev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/pablo-coral" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <p className="footer-copyright">© 2026 Pablo Coral. All rights reserved.</p>
      </div>
    </footer>
  )
}
