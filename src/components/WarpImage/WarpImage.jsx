import { useState } from 'react'
import './WarpImage.css'

const WarpImage = ({ src }) => {
  const [scale, setScale] = useState(0)

  const handleMouseMove = (e) => {
    setScale(10 + (e.clientX / window.innerWidth) * 20)
  }

  return (
    <div>
      <svg className="warpSvg">
        <filter id="warpFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="5"
            result="waves"
          ></feTurbulence>
          <feColorMatrix in="waves" type="hueRotate">
            <animate
              attributeName="values"
              values="0;360"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </feColorMatrix>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale={scale}
            in="SourceGraphic"
          ></feDisplacementMap>
        </filter>
      </svg>
      <div>
        <img
          src={src}
          alt=""
          className="warpImage"
          onMouseMove={handleMouseMove}
        />
      </div>
      <p>this is the calculated: {scale}</p>
    </div>
  )
}

export default WarpImage
