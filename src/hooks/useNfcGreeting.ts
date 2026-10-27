import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const GREETINGS: Record<string, string> = {
  phone: "You just tapped my phone! Here's what I build.",
  blazer: "You just tapped my blazer! Here's what I build.",
}
const FALLBACK_GREETING = "Thanks for tapping. Here's what I build."

// Visitors arriving from an NFC tag land on /?ref=nfc&src=<tag> (see api/tap.ts).
export function useNfcGreeting() {
  const location = useLocation()
  const navigate = useNavigate()

  const [greeting] = useState<string | null>(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('ref') !== 'nfc') return null
    return GREETINGS[params.get('src') ?? ''] ?? FALLBACK_GREETING
  })

  // Strip the query so shared links stay clean; the greeting lives in state.
  useEffect(() => {
    if (greeting && location.search) {
      navigate({ search: '' }, { replace: true, state: location.state })
    }
  }, [greeting, location.search, location.state, navigate])

  return greeting
}
