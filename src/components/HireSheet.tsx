import { useEffect, useRef, useState, type FormEvent } from 'react'

const FALLBACK_EMAIL = 'pablo.coral03@icloud.com'

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface HireSheetProps {
  onClose: () => void
}

/** Bottom sheet (phones) / centered dialog (desktop) that sends a hiring message through /api/hire. */
export function HireSheet({ onClose }: HireSheetProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState('')
  const firstField = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstField.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        return
      }
      const { error } = await res.json().catch(() => ({ error: '' }))
      setErrorText(error === 'rate_limited' ? "You've sent a few already, so I'll be in touch soon." : "That didn't go through.")
    } catch {
      setErrorText("That didn't go through.")
    }
    setStatus('error')
  }

  return (
    <div className="hire-overlay" onClick={onClose}>
      <div className="hire-sheet" role="dialog" aria-modal="true" aria-labelledby="hire-title" onClick={(e) => e.stopPropagation()}>
        <button className="hire-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {status === 'sent' ? (
          <div className="hire-sent">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="url(#hire-gold)" />
              <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="hire-gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f7d98b" />
                  <stop offset="0.55" stopColor="#d4a537" />
                  <stop offset="1" stopColor="#b8862b" />
                </linearGradient>
              </defs>
            </svg>
            <h3 id="hire-title">Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h3 id="hire-title" className="hire-title">Let's talk</h3>
            <p className="hire-subtitle">Send me a note and it lands straight in my inbox.</p>

            <form className="hire-form" onSubmit={handleSubmit}>
              <input ref={firstField} name="name" placeholder="Your name" autoComplete="name" required maxLength={100} />
              <input name="contact" placeholder="Email or phone" autoComplete="email" required maxLength={200} />
              <input name="company" placeholder="Company (optional)" autoComplete="organization" maxLength={100} />
              <textarea name="message" placeholder="What's the role or project?" rows={4} required maxLength={4000} />
              {/* Honeypot for bots; hidden from people and screen readers */}
              <input name="website" tabIndex={-1} autoComplete="off" className="hire-hp" aria-hidden="true" />

              {status === 'error' && (
                <p className="hire-error">
                  {errorText} You can also <a href={`mailto:${FALLBACK_EMAIL}?subject=Interested%20in%20hiring%20you`}>email me directly</a>.
                </p>
              )}

              <button type="submit" className="btn btn-lg btn-gold hire-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </form>

            <p className="hire-alt">
              Prefer email? <a href={`mailto:${FALLBACK_EMAIL}?subject=Interested%20in%20hiring%20you`}>{FALLBACK_EMAIL}</a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
