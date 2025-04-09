import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useFocusRestore } from '../../hooks/useFocusRestore'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import './InfoModal.css'

const InfoModal = ({ isOpen, onClose, title, techStack, desc, colors }) => {
  const dialogRef = useRef()
  useFocusTrap(dialogRef, isOpen)
  useFocusRestore(isOpen)
  useEscapeKey(onClose, isOpen)
  useLockBodyScroll(isOpen)

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      style={{
        '--portalColor1': colors[0],
        '--portalColor2': colors[1],
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        ref={dialogRef}
      >
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-button" onClick={onClose}>
            X
          </button>
        </div>

        <section>
          <h3 className="modal-section-title">Tech Stack & Features</h3>
          <ul className="modal-tech-stack">
            {techStack.map((tech) => {
              return <li key={tech}>{tech}</li>
            })}
          </ul>
        </section>
        <section>
          <h3 className="modal-section-title">Description</h3>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </section>
      </div>
    </div>,
    document.getElementById('modal-root'),
  )
}

export default InfoModal
