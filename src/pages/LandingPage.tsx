import { useEffect } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { StarfieldBackground } from '../components/StarfieldBackground'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { ProjectsPreview } from '../components/previews/ProjectsPreview'
import { ExperiencePreview } from '../components/previews/ExperiencePreview'
import { LibraryPreview } from '../components/previews/LibraryPreview'
import { PianoPreview } from '../components/previews/PianoPreview'
import { StravaPreview } from '../components/previews/StravaPreview'
import { GalleryPreview } from '../components/previews/GalleryPreview'
import { ContactSection } from '../components/ContactSection'
import { scrollToSection } from '../utils/scrollToSection'

export function LandingPage() {
  const { isMobile } = useOutletContext<{ isMobile: boolean }>()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      scrollToSection(state.scrollTo)
      navigate('.', { replace: true, state: {} })
    }
  }, [location.state, navigate])

  return (
    <div className="starfield-page">
      <StarfieldBackground />
      <Hero isMobile={isMobile} />
      <About />
      <StravaPreview />
      <ProjectsPreview />
      <ExperiencePreview />
      <LibraryPreview />
      <PianoPreview />
      <GalleryPreview />
      <ContactSection />
    </div>
  )
}
