import { useState } from 'react'
import type { Experience } from '../types'
import { experiences } from '../data/experiences'
import { ExperienceCard } from './cards/ExperienceCard'
import { ExperienceModal } from './modals/ExperienceModal'

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  return (
    <section id="experience" className="section experience-section">
      <div className="section-content">
        <h3 className="section-title">Work Experience</h3>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} onClick={() => setSelectedExperience(exp)} />
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
      )}
    </section>
  )
}
