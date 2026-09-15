import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const scrollOrNavigate = (id: string) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <nav ref={navRef} className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        {menuOpen && <div className="nav-menu-backdrop" onClick={() => setMenuOpen(false)} />}

        <Link to="/" className="nav-brand">Pablo Coral</Link>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu-panel ${menuOpen ? 'open' : ''}`}>
          <span className="nav-menu-group-label">Professional</span>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/experience">EXPERIENCE</Link>
          <button onClick={() => scrollOrNavigate('contact')}>CONTACT</button>

          <span className="nav-menu-group-label">Personal</span>
          <Link to="/strava">STRAVA</Link>
          <Link to="/piano">PIANO</Link>
          <Link to="/library">LIBRARY</Link>
          <Link to="/gallery">GALLERY</Link>
        </div>
      </div>
    </nav>
  )
}
