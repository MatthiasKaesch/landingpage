import React from 'react'
import './ProjectCard.css'
import WarpedBackground from '../WarpedBackground/WarpedBackground'
import InfoIcon from '../Icons/InfoIcon'
import GitHubIcon from '../Icons/GitHubIcon'

const ProjectCard = ({
  title,
  projectUrl,
  projectRepo,
  thumbnail,
  techStack,
  colors,
}) => {
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
      <h2 className="portal-title">{title}</h2>

      <a
        className="portal-link"
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WarpedBackground src={`/landingpage/assets/images/${thumbnail}`} />
      </a>

      <button className="portal-info">
        <InfoIcon /* style={{ color: colors[1] }} */ />
      </button>

      <a
        className="portal-repo"
        href={projectRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon /* style={{ color: colors[1] }} */ />
      </a>
    </div>
  )
}

export default ProjectCard
