import React, { useState } from 'react'
import './WarpedBackground.css'

const WarpedBackground = ({ src }) => {
  return (
    <div className="container">
      <svg className="warpSvg">
        <filter id="warpFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            result="waves"
          ></feTurbulence>
          <feColorMatrix in="waves" type="hueRotate">
            <animate
              attributeName="values"
              values="0;720"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </feColorMatrix>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="15"
            in="SourceGraphic"
          ></feDisplacementMap>
        </filter>
      </svg>

      <div
        className="image"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
    </div>
  )
}

export default WarpedBackground
