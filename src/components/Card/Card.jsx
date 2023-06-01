import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
import styles from './Card.module.css'
import Button from '../Button/Button'
import checkIcon from '../../assets/check.svg'

function Card({
  tag, title, text, accounts, checks, link,
}) {
  const [list, setList] = useState([])

  useEffect(() => setList(checks), [])

  return (
    <div className={`${styles.mainContainer}`}>
      <span className={`${styles.tagContainer}`}>{tag}</span>
      <h3 className={`${styles.titleContainer}`}>{title}</h3>
      <p className={`${styles.textContainer}`}>{text}</p>
      <p className={`${styles.accountContainer}`}>{accounts}</p>
      <hr className={`${styles.separator}`} />
      <ul className={`${styles.ulContainer}`}>
        {list.map((ob) => (
          <li className={`${styles.liContainer}`}>
            <img src={checkIcon} className={`${styles.checkLi}`} alt="checkList" />
            <p className={`${styles.pLi}`}>
              {ob}
            </p>
          </li>
        ))}
      </ul>
      <Button link={link} text="empezar" />
      <p className={`${styles.pContainer}`}>
        <a className={`${styles.aContainer}`} href="https://www.spotify.com/legal/premium-promotional-offer-terms">
          Se aplican Términos y Condiciones.
        </a>
        { ' El mes gratis no está disponible para los usuarios que ya han probado Premium.' }
      </p>
    </div>
  )
}

Card.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  accounts: PropTypes.string.isRequired,
  checks: PropTypes.arrayOf(string).isRequired,
  link: PropTypes.string.isRequired,
}

export default Card
