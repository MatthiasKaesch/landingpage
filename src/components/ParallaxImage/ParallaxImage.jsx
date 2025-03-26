import React, { useState } from 'react'

const ParallaxImage = ({ src }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * -100 // Skaliert Bewegung
    const y = (e.clientY / innerHeight - 0.5) * -100

    setOffset({ x, y })
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      className="parallax-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt="Parallax"
        className="parallax-image"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />
    </div>
  )
}

export default ParallaxImage
