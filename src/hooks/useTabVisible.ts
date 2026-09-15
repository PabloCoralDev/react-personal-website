import { useEffect, useState } from 'react'

export function useTabVisible() {
  const [tabVisible, setTabVisible] = useState(!document.hidden)

  useEffect(() => {
    const handleVisibilityChange = () => setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return tabVisible
}
