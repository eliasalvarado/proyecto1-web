import React, { useState, useEffect } from 'react'
import styles from './Premium.module.css'

function Premium() {
  const dataDemo = [
    { title: 'Descarga tu música.', text: 'Escúchala desde cualquier lugar.', urlImg: 'https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f' },
    { title: 'Escucha música sin anuncios.', text: 'Disfruta de tu música sin interrupciones.', urlImg: 'https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137' },
    { title: 'Reproduce lo que quieras.', text: 'Incluso en dispositivos móviles.', urlImg: 'https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67' },
    { title: 'Salta canciones de forma ilimitada.', text: 'Solo pasa a la siguiente.', urlImg: 'https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012' },
  ]

  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataDemo)
  }, [])

  return (
    <ul className={`${styles.ulContainer}`}>
      {data.map((ob) => (
        <li className={`${styles.liContainer}`}>
          <div className={`${styles.divImg}`} style={{ backgroundImage: `url(${ob.urlImg})` }} />
          <div className={`${styles.liContainer}`}>
            <p className={`${styles.pTitle}`}>
              {ob.title}
            </p>
            <p className={`${styles.pText}`}>
              {ob.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Premium
