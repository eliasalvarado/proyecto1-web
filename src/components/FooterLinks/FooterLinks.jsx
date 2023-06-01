import React, { useState, useEffect } from 'react'
import styles from './FooterLinks.module.css'

function FooterLinks() {
  const [links, setLinks] = useState([])

  const linksDemo = [
    { text: 'Legal', link: 'https://www.spotify.com/gt/legal/' },
    { text: 'Centro de privacidad', link: 'https://www.spotify.com/gt/privacy/' },
    { text: 'Política de Privacidad', link: 'https://www.spotify.com/gt/legal/privacy-policy/' },
    { text: 'Cookies', link: 'https://www.spotify.com/gt/legal/cookies-policy/' },
    { text: 'Sobre los anuncios', link: 'https://www.spotify.com/gt/legal/privacy-policy/#s3' },
    { text: 'Accesibilidad', link: 'https://www.spotify.com/gt/accessibility/' },
  ]

  useEffect(() => {
    setLinks(linksDemo)
  }, [])

  return (
    <ul className={`${styles.mainContainer}`}>
      {links.map((link) => (
        <li className={`${styles.liContainer}`}>
          <a className={`${styles.a}`} href={link.link}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
