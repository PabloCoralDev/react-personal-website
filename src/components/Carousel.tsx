import { useCallback, useEffect, useState, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  getKey: (item: T, index: number) => string | number
  /** Sets each slide's width via CSS (flex-basis). */
  slideClassName: string
  label: string
  /** Snap the active slide to the center (neighbours peek on both sides). */
  centered?: boolean
  /** Small chevrons on the slide edges, shown on touch screens too, hinting that the row swipes. */
  edgeArrows?: boolean
}

const Chevron = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d={dir === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Carousel<T>({ items, renderItem, getKey, slideClassName, label, centered, edgeArrows }: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: centered ? 'center' : 'start' })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => setSelected(emblaApi?.selectedScrollSnap() ?? 0), [emblaApi])
  useEffect(() => {
    if (!centered) return
    emblaApi?.on('select', onSelect)
    return () => {
      emblaApi?.off('select', onSelect)
    }
  }, [emblaApi, onSelect, centered])

  return (
    <div
      className={`embla${centered ? ' embla-centered' : ''}${edgeArrows ? ' embla-edge' : ''}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          {items.map((item, index) => (
            <div
              key={getKey(item, index)}
              className={`embla-slide ${slideClassName}${centered && index === selected ? ' is-selected' : ''}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {edgeArrows ? (
        <>
          <button className="embla-edge-arrow prev" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous">
            <Chevron dir="prev" />
          </button>
          <button className="embla-edge-arrow next" onClick={() => emblaApi?.scrollNext()} aria-label="Next">
            <Chevron dir="next" />
          </button>
        </>
      ) : (
        <div className="embla-controls">
          <button className="icon-btn" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous">
            <Chevron dir="prev" />
          </button>
          <button className="icon-btn" onClick={() => emblaApi?.scrollNext()} aria-label="Next">
            <Chevron dir="next" />
          </button>
        </div>
      )}
    </div>
  )
}
