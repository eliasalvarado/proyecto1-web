import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './InfoFooterComponent.module.css'

function InfoFooterComponent({ info, titulo }) {
  const [array, setArray] = useState([])

  useEffect(() => {
    setArray(info)
  }, [])

  return (
    <dl className={`${styles.mainContainer}`}>
      <dt className={`${styles.title}`}>{titulo}</dt>
      {array.map((enlace) => (
        <dd className={`${styles.redireccionador}`}>
          <a className={`${styles.aRedireccionador}`} href={enlace.link}>{enlace.text}</a>
        </dd>
      ))}
    </dl>
  )
}

InfoFooterComponent.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
  titulo: PropTypes.string.isRequired,
}

export default InfoFooterComponent
