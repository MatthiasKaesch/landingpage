import React, { useRef } from 'react'
import { useFocusRestore } from '../../hooks/useFocusRestore'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import './InfoModal.css'

const InfoModal = ({ isOpen, onClose, title, techStack, desc }) => {
  const dialogRef = useRef()
  useFocusTrap(dialogRef, isOpen)
  useFocusRestore(isOpen)
  useEscapeKey(onClose, isOpen)

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
