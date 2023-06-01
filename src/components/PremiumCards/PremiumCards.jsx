import React, { useState, useEffect } from 'react'
import styles from './PremiumCards.module.css'
import Card from '../Card/Card'

function PremiumCards() {
  const dataDemo = [
    {
      tag: '1 mes gratis', title: 'Individual', text: 'Después del periodo de la oferta, cuesta 5.99 USD al mes', accounts: '1 cuenta', checks: ['Escucha música sin anuncios', 'Reproduce tus canciones en cualquier lugar, incluso sin conexión', 'Reproducción on-demand'], link: 'https://www.spotify.com/gt/purchase/offer/default-trial-1m?country=GT',
    },
    {
      tag: '1 mes gratis', title: 'Duo', text: 'Después del período de la oferta, 7.99 USD al mes', accounts: '2 cuentas', checks: ['2 cuentas Premium para parejas que conviven', 'Reproducción de música sin anuncios, sin conexión y on-demand'], link: 'https://www.spotify.com/gt/purchase/offer/duo-1-month-trial?country=GT',
    },
    {
      tag: '1 mes gratis', title: 'Familiar', text: 'Después del periodo de la oferta, 9.99 USD al mes', accounts: 'Hasta 6 cuentas', checks: ['6 cuentas Premium para familiares que conviven', 'Bloquea la música explícita', 'Reproducción de música sin anuncios, sin conexión y on-demand'], link: 'https://www.spotify.com/gt/purchase/offer/new-family-1m?country=GT',
    },
  ]

  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataDemo)
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
      {data.map((ob) => (
        <Card
          tag={ob.tag}
          title={ob.title}
          text={ob.text}
          accounts={ob.accounts}
          checks={ob.checks}
          link={ob.link}
        />
      ))}
    </div>
  )
}

export default PremiumCards
