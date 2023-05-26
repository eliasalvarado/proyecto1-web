import React from 'react'
import icon from '../../assets/icon.svg'
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={`${styles.divLogoContainer}`}>
      <a className={`${styles.aContainer}`} href="https://www.spotify.com/gt/">
        <img src={icon} alt="iconoSpotify" />
        <span className={`${styles.logoSpan}`}>Spotify</span>
      </a>
    </div>
  )
}

export default Logo
