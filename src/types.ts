export interface Project {
  title: string
  description: string
  tags: string[]
  outer_image: string
  inner_image?: string
  isVideo?: boolean
  details?: {
    fullDescription: string[]
    images?: string[]
    github?: string
    demo?: string
    video?: string
    sheets?: string
  }
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  tags: string[]
  logo?: string
  website?: string
  personalNote?: string
  hasTeachingGallery?: boolean
  details?: {
    fullDescription: string[]
    image?: string
  }
}

export interface Book {
  title: string
  author: string
  image: string
  status: 'complete' | 'in-progress'
  details?: {
    fullDescription: string[]
    keyTakeaways?: string[]
  }
}

export interface PianoPiece {
  composer: string
  title: string
  category: 'solo' | 'chamber' | 'ensemble'
  status: 'performed' | 'in-progress' | 'up-next'
  notes?: string
  imslpUrl?: string
  imslpPdfUrl?: string
  pdfLocation?: string
  videoUrl?: string
  thumbnail?: string
}

export type StravaSport = 'Run' | 'Ride'

export interface StravaPhoto {
  src: string
  lat?: number
  lng?: number
}

export interface StravaActivity {
  id: string
  name: string
  sport: StravaSport
  date: string
  distanceMiles: number
  movingTimeSeconds: number
  elevationGainFt: number
  locationLabel?: string
  track?: [number, number][]
  photos?: StravaPhoto[]
  gearName?: string
}

export interface StravaYearStats {
  year: number
  miles: { Run: number; Ride: number }
  elevationFt: number
  activityCount: number
}

export interface StravaPersonalRecord {
  sport: StravaSport
  label: string
  value: string
  date: string
  activityId?: string
}

export interface StravaHeatmapDay {
  date: string
  miles: number
}

export interface StravaGear {
  id: string
  name: string
  type: 'bike' | 'shoe'
  brand?: string
  model?: string
  distanceMiles?: number
  retired?: boolean
  current?: boolean
}

export interface StravaSnapshot {
  generatedAt: string
  years: StravaYearStats[]
  heatmap: StravaHeatmapDay[]
  personalRecords: StravaPersonalRecord[]
  activities: StravaActivity[]
  gear: StravaGear[]
}

export interface Photo {
  image: string,
  subtitle: string,
  location: string,
  date?: string,
  portrait?: boolean,
}
