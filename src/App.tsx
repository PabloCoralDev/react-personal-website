import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LandingPage } from './pages/LandingPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { LibraryPage } from './pages/LibraryPage'
import { PianoPage } from './pages/PianoPage'
import { StravaPage } from './pages/StravaPage'
import { GalleryPage } from './pages/GalleryPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/piano" element={<PianoPage />} />
        <Route path="/training" element={<StravaPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
