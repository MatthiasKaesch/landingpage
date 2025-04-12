import React, { useRef, useState } from 'react'
import './Portal.css'
import WarpedBackground from '../WarpedBackground/WarpedBackground'
import InfoIcon from '../Icons/InfoIcon'
import GitHubIcon from '../Icons/GitHubIcon'
import InfoModal from '../InfoModal/InfoModal'

const ProjectCard = ({
  title,
  projectUrl,
  projectRepo,
  thumbnail,
  techStack,
  desc,
  colors,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)

  const openModal = () => {
    triggerRef.current = document.activeElement
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div
      className="portal"
      style={{
        '--thumbnail': `url(/landingpage/assets/images/${thumbnail})`,
        '--color1': colors[0],
        '--color2': colors[1],
        '--color3': colors[2],
        '--color4': colors[3],
        '--color5': colors[0],
      }}
    >
      <InfoModal
        isOpen={isOpen}
        onClose={closeModal}
        title={`${title} - Info`}
        techStack={techStack}
        desc={desc}
        colors={[colors[0], colors[2]]}
      />

      <h2 className="portal-title">{title}</h2>

      <a
        className="portal-link"
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WarpedBackground src={`/landingpage/assets/images/${thumbnail}`} />
      </a>

      <button
        className="portal-info"
        onClick={openModal}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <InfoIcon />
      </button>

      <a
        className="portal-repo"
        href={projectRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  )
}

export default ProjectCard
