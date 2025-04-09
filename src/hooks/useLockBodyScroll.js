import { useEffect } from 'react'

export function useLockBodyScroll(active = true) {
  useEffect(() => {
    if (!active) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [active])
}
