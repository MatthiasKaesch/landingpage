import React from 'react'

const InfoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="12"
      y1="10"
      x2="12"
      y2="16"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
  </svg>
)

export default InfoIcon
