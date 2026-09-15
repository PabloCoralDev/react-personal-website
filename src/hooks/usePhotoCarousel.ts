import { useEffect, useState } from 'react'

export function usePhotoCarousel(photoCount: number) {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photoCount)
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photoCount) % photoCount)

  // Auto-advance the photo carousel (resets whenever the user navigates manually)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentPhoto((prev) => (prev + 1) % photoCount)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [currentPhoto, photoCount])

  return { currentPhoto, setCurrentPhoto, nextPhoto, prevPhoto }
}
