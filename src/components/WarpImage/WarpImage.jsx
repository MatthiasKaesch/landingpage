import './WarpImage.css'
import '../ProjectCard/ProjectCard.css'

const WarpImage = ({ src }) => {
  return (
    <div className="portal">
      <div className="warpContainer">
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
        <div>
          <img src={src} alt="" className="warpImage" />
        </div>
      </div>
    </div>
  )
}

export default WarpImage
