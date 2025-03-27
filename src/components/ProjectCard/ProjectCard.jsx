import React from 'react'
import './ProjectCard.css'

import WarpImage from '../WarpImage/WarpImage'

const ProjectCard = ({ title, projectUrl, thumbnail, techStack, colors }) => {
  console.clear()
  return (
    <div>
      <h2>{title}</h2>
      <div className="portal">
        <WarpImage src={`/landingpage/assets/images/${thumbnail}`} alt="" />
      </div>
    </div>
  )
}

export default ProjectCard
