import { useEffect, useState } from 'react'

export function useTypewriter(fullText: string) {
  const [typedText, setTypedText] = useState('')
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (typedText.length === fullText.length && !typingComplete) {
      setTypingComplete(true)
    }
  }, [typedText, fullText, typingComplete])

  return { typedText, typingComplete }
}
