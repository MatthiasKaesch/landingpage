import React, { useEffect, useRef } from 'react'
import { useFocusRestore } from '../../hooks/useFocusRestore'
import './InfoModal.css'

const InfoModal = ({ isOpen, onClose, title, techStack, desc }) => {
  const dialogRef = useRef()
  useFocusRestore(isOpen)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      dialogRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleTab = (e) => {
    const focusable = dialogRef.current.querySelectorAll(
      'button, [href], input, [tabindex]:not([tabindex="-1"])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  useEffect(() => {
    const lastFocused = document.activeElement
    return () => {
      lastFocused?.focus()
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        ref={dialogRef}
        onKeyDown={handleTab}
      >
        <div className="modal-header">
          <h3 id="modal-title">{title}</h3>
          <button onClick={onClose}>Close</button>
        </div>
        <ul>
          {techStack.map((tech) => {
            return <li key={tech}>{tech}</li>
          })}
        </ul>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default InfoModal
