import { useEffect } from 'react'

export const useFocusTrap = (ref, active = true) => {
  useEffect(() => {
    if (!active || !ref?.current) return

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([type="hidden"]):not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ]

    const focusableElements = ref.current.querySelectorAll(
      focusableSelectors.join(','),
    )
    const first = focusableElements[0]
    const last = focusableElements[focusableElements.length - 1]

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    ref.current.addEventListener('keydown', trapFocus)

    return () => {
      ref.current?.removeEventListener('keydown', trapFocus)
    }
  }, [ref, active])
}
