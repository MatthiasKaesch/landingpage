import { useEffect } from 'react'

export function useEscapeKey(callback, active = true) {
  useEffect(() => {
    if (!active) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, active])
}
