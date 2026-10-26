import type { ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  getKey: (item: T, index: number) => string | number
  /** Sets each slide's width via CSS (flex-basis). */
  slideClassName: string
  label: string
}

export function Carousel<T>({ items, renderItem, getKey, slideClassName, label }: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  return (
    <div className="embla" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          {items.map((item, index) => (
            <div key={getKey(item, index)} className={`embla-slide ${slideClassName}`}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="embla-controls">
        <button className="icon-btn" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="icon-btn" onClick={() => emblaApi?.scrollNext()} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
