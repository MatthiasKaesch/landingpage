import { useEffect, useRef } from 'react'

export function useFocusRestore(active = true) {
  const lastFocusedRef = useRef(null)

  useEffect(() => {
    if (!active) return
    lastFocusedRef.current = document.activeElement

    return () => {
      lastFocusedRef.current?.focus()
    }
  }, [active])
}
