import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

// PFC signature, one continuous stroke (from pfc-draw.svg). pathLength=1 lets CSS draw it with a 0→1 dash offset.
const SIGNATURE_PATH =
  'M108.0,828.0 C196.0,625.0 282.0,420.0 318.0,322.0 C284.0,334.0 234.0,386.0 204.0,442.0 C240.0,398.0 276.0,348.0 312.0,318.0 C346.0,292.0 392.0,278.0 402.0,302.0 C412.0,330.0 330.0,412.0 276.0,458.0 C322.0,424.0 372.0,392.0 404.0,352.0 C446.0,280.0 512.0,160.0 548.0,104.0 C566.0,76.0 517.1,72.0 493.9,129.5 C434.0,277.8 374.0,426.2 314.1,574.5 C290.9,632.0 328.8,663.1 335.3,630.4 C348.3,565.1 384.2,433.0 404.0,352.0 C406.4,342.3 546.8,254.0 608.0,212.0 C584.0,198.0 546.0,238.0 547.0,284.0 C548.0,328.0 592.0,334.0 628.0,310.0 C664.0,288.0 698.0,266.0 724.0,256.0 C690.0,286.0 420.0,432.0 122.0,640.0'

const SIGNED_KEY = 'nav-signed'

/** Sign once per visit (tab session); later page loads show the finished mark. */
function shouldSign() {
  try {
    if (sessionStorage.getItem(SIGNED_KEY)) return false
    sessionStorage.setItem(SIGNED_KEY, '1')
  } catch {
    /* storage blocked: just animate */
  }
  return true
}

export function Nav() {
  const [signing] = useState(shouldSign)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

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
    <nav ref={navRef} className="nav">
      <div className="nav-content">
        {menuOpen && <div className="nav-menu-backdrop" onClick={() => setMenuOpen(false)} />}

        <Link to="/" className={`nav-brand${signing ? ' is-signing' : ''}`} aria-label="Pablo Coral, home">
          <svg className="nav-sig" viewBox="69 45 694 822" aria-hidden="true">
            <path pathLength={1} d={SIGNATURE_PATH} />
          </svg>
          <span className="nav-brand-text">Pablo Coral</span>
        </Link>

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
          <Link to="/training">TRAINING</Link>
          <Link to="/piano">PIANO</Link>
          <Link to="/library">LIBRARY</Link>
          <Link to="/gallery">GALLERY</Link>
        </div>
      </div>
    </nav>
  )
}
