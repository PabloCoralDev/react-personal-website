import { Outlet } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  const isMobile = useIsMobile()

  return (
    <div className="app">
      <Nav />
      <Outlet context={{ isMobile }} />
      <Footer />
    </div>
  )
}
