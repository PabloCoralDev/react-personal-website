import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

const FALLBACK_EMAIL = 'pablo.coral03@icloud.com'
const MAILTO = `mailto:${FALLBACK_EMAIL}?subject=Interested%20in%20hiring%20you`
const DRAFT_KEY = 'hire-draft'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Draft = { name: string; contact: string; company: string; message: string }

const EMPTY: Draft = { name: '', contact: '', company: '', message: '' }

// The draft lives only in this visitor's browser; storage can be unavailable (private mode), so every access is guarded.
function loadDraft(): Draft {
  try {
    const saved = localStorage.getItem(DRAFT_KEY)
    return saved ? { ...EMPTY, ...JSON.parse(saved) } : EMPTY
  } catch {
    return EMPTY
  }
}

function saveDraft(draft: Draft) {
  try {
    if (Object.values(draft).some((v) => v.trim())) localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
    else localStorage.removeItem(DRAFT_KEY)
  } catch {
    /* storage unavailable: the form still works, it just won't remember */
  }
}

export function HirePage() {
  const [draft, setDraft] = useState<Draft>(loadDraft)
  const [restored] = useState(() => Object.values(draft).some((v) => v.trim()))
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    if (status !== 'sent') saveDraft(draft)
  }, [draft, status])

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDraft((d) => ({ ...d, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const website = (new FormData(e.currentTarget).get('website') as string) ?? ''
    try {
      const res = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...draft, website }),
      })
      if (res.ok) {
        saveDraft(EMPTY)
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
    <div className="page">
      <section className="section hire-page">
        <div className="section-content hire-content">
          {status === 'sent' ? (
            <div className="hire-sent">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
              <h3 className="hire-title">Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
          ) : (
            <>
              <h3 className="hire-title">Let's talk</h3>
              <p className="hire-subtitle">
                Send me a note and it lands straight in my inbox.
                {restored && <span className="hire-restored"> Your draft was saved, so pick up where you left off.</span>}
              </p>

              <form className="hire-form" onSubmit={handleSubmit}>
                <input name="name" placeholder="Your name" autoComplete="name" required maxLength={100} value={draft.name} onChange={update} />
                <input name="contact" placeholder="Email or phone" autoComplete="email" required maxLength={200} value={draft.contact} onChange={update} />
                <input name="company" placeholder="Company (optional)" autoComplete="organization" maxLength={100} value={draft.company} onChange={update} />
                <textarea name="message" placeholder="What's the role or project?" rows={6} required maxLength={4000} value={draft.message} onChange={update} />
                {/* Honeypot for bots; hidden from people and screen readers */}
                <input name="website" tabIndex={-1} autoComplete="off" className="hire-hp" aria-hidden="true" />

                {status === 'error' && (
                  <p className="hire-error">
                    {errorText} You can also <a href={MAILTO}>email me directly</a>.
                  </p>
                )}

                <button type="submit" className="btn btn-lg btn-gold hire-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
              </form>

              <p className="hire-alt">
                Prefer email? <a href={MAILTO}>{FALLBACK_EMAIL}</a>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
