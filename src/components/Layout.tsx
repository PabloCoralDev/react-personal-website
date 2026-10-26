import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  const isMobile = useIsMobile()
  const { pathname, state } = useLocation()

  // Every new page opens at the top; the landing page handles its own { scrollTo } jumps.
  useLayoutEffect(() => {
    if (!(state as { scrollTo?: string } | null)?.scrollTo) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className="app">
      <Nav />
      <Outlet context={{ isMobile }} />
      <Footer />
    </div>
  )
}
