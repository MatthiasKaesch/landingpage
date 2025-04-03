import React from 'react'
import WarpedBackground from '../WarpedBackground/WarpedBackground'

const ProjectCard = ({ title, projectUrl, thumbnail, techStack, colors }) => {
  return (
    <div>
      <h2>{title}</h2>
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
        <WarpedBackground src={`/landingpage/assets/images/${thumbnail}`} />
      </div>
    </div>
  )
}

export default ProjectCard
