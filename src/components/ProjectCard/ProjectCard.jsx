import React from 'react'
import './ProjectCard.css'

import ParallaxImage from '../ParallaxImage/ParallaxImage'

const ProjectCard = ({ title, projectUrl, thumbnail, techStack, colors }) => {
  console.clear()
  return (
    <div>
      <h2>{title}</h2>
      <div className="portal">
        <ParallaxImage src={`/landingpage/assets/images/${thumbnail}`} alt="" />
      </div>
    </div>
  )
}

export default ProjectCard
