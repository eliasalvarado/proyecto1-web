import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({ link, text, type = 'primary' }) {
  return (
    <a href={link}>
      <button
        className={`${styles.button} ${type === 'primary' ? styles.primary : styles.secondary}`}
        type="button"
      >
        <span>{text}</span>
      </button>
    </a>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button
