import React from 'react'
import styles from './InfoFooter.module.css'
import InfoFooterComponent from '../InfoFooterComponent/InfoFooterComponent'

function InfoFooter() {
  const companiaDemo = [
    { link: 'https://www.spotify.com/gt/about-us/contact/', text: 'Acerca de' },
    { link: 'https://www.lifeatspotify.com/?_gl=1*1flx1mr*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Empleo' },
    { link: 'https://newsroom.spotify.com/?_gl=1*1flx1mr*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'For the Record' },
  ]

  const comunidadesDemo = [
    { link: 'https://artists.spotify.com/?_gl=1*kyaftk*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Para artistas' },
    { link: 'https://developer.spotify.com/?_gl=1*1076a5w*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Desarrolladores' },
    { link: 'https://ads.spotify.com/?_gl=1*1076a5w*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Publicidad' },
    { link: 'https://investors.spotify.com/?_gl=1*1076a5w*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Inversionistas' },
    { link: 'https://spotifyforvendors.com/', text: 'Proveedores' },
    { link: 'https://www.spotify.com/spotifyforwork/', text: 'Spotify for Work' },
  ]

  const enlacesDemo = [
    { link: 'https://support.spotify.com/?_gl=1*1076a5w*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Ayuda' },
    { link: 'https://open.spotify.com/?_gl=1*w69o8f*_gcl_aw*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2ODUwNjU0MzUuQ2p3S0NBancwNHlqQmhBcEVpd0FKY3ZOb2Y1amZwTTkzazBCYTBKal9TM3R1UzBpbnNaTVd0dXFhb3IyNG1vbVNQSWxLRzh3bl9jbFlSb0NDVllRQXZEX0J3RQ..*_gcl_au*MTQ1Nzk1MTE3MC4xNjg0Mjk2MzI3', text: 'Reproductor web' },
    { link: 'https://www.spotify.com/gt/free/', text: 'App móvil gratis' },
  ]

  return (
    <div className={`${styles.infoFooter}`}>
      <InfoFooterComponent info={companiaDemo} titulo="compañia" />
      <InfoFooterComponent info={comunidadesDemo} titulo="comunidades" />
      <InfoFooterComponent info={enlacesDemo} titulo="enlaces útiles" />
    </div>
  )
}

export default InfoFooter
