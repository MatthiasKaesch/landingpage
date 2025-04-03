import React from 'react'
import './WarpedBackground.css'

const WarpedBackground = ({ src }) => {
  console.log(src)
  return (
    <div className="container">
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
            scale="10"
            in="SourceGraphic"
          ></feDisplacementMap>
        </filter>
      </svg>

      <div
        className="image"
        style={{
          backgroundImage: `url(${src})`,
          /* filter: 'url(#warpFilter)', */
        }}
      ></div>
    </div>
  )
}

export default WarpedBackground
