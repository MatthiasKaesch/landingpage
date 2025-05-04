import React from 'react'
import './SocialBar.css'
import GitHubIcon from '../Icons/GitHubIcon'
import LinkedInIcon from '../Icons/LinkedInIcon'
import MailIcon from '../Icons/MailIcon'

const SocialBar = () => {
  return (
    <div className="social-bar-container">
      <div className="social-bar">
        <a
          href="https://github.com/MatthiasKaesch/landingpage"
          target="_blank"
          rel="noopener noreferrer"
          className="social-bar-link"
        >
          <GitHubIcon className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthias-kaesch/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-bar-link"
        >
          <LinkedInIcon className="social-icon" />
        </a>
        <a href="mailto:matthias.kaesch@gmail.com" className="social-bar-link">
          <MailIcon className="social-icon" />
        </a>
      </div>
    </div>
  )
}

export default SocialBar
