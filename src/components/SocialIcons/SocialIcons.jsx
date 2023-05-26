import React, { useState, useEffect } from 'react'
import styles from './SocialIcons.module.css'

function SocialIcons() {
  const [social, setSocial] = useState([])

  const socialDemo = [
    { nombre: 'instagram', link: 'https://instagram.com/spotify' },
    { nombre: 'twitter', link: 'https://twitter.com/spotify' },
    { nombre: 'facebook', link: 'https://www.facebook.com/Spotify' },
  ]

  const styleMedia = {
    instagram: `${styles.instagram}`,
    twitter: `${styles.twitter}`,
    facebook: `${styles.facebook}`,
  }

  useEffect(() => {
    setSocial(socialDemo)
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
      <ul className={`${styles.ulContainer}`}>
        {social.map((media) => (
          <li className={`${styles.liContainer}`}>
            <a className={`${styles.aContainer}`} href={media.link} title={`${media.nombre}`}>
              <span className={styleMedia[media.nombre]} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialIcons
