import React from 'react'
import './Header.css'
import SocialBar from '../SocialBar/SocialBar'

const Header = () => {
  return (
    <header className="header">
      <h1 className="headline">
        <span className="hero">Matthias Käsch</span>
        <span className="subtitle">Frontend Developer</span>
      </h1>
      <SocialBar />
    </header>
  )
}

export default Header
