import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavBarComponent.module.css'

function NavBarComponent({ separador, link, text }) {
  return (
    <li className={`${styles.mainContainer}`} role={separador ? 'separator' : ''}>
      {!separador && (
        <a className={`${styles.a}`} href={link}>
          {text}
        </a>
      )}
      {separador && <span className={`${styles.span}`}>|</span>}
    </li>
  )
}

NavBarComponent.propTypes = {
  separador: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavBarComponent
