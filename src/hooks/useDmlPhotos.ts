import type { Photo } from '../types'
import { deriveCaptionFromFilename } from '../utils/deriveCaptionFromFilename'

const modules = import.meta.glob<string>('/src/assets/dml/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

export function useDmlPhotos(): Photo[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url]) => {
      const filename = path.split('/').pop() ?? path
      return {
        image: url,
        subtitle: deriveCaptionFromFilename(filename),
        location: 'Design & Manufacturing Lab, UF',
      }
    })
}
