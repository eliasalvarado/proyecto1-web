import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Logo from '../components/Logo/Logo'
import styles from './Home.module.css'
import InfoFooter from '../components/InfoFooter/InfoFooter'
import SocialIcons from '../components/SocialIcons/SocialIcons'
import FooterLinks from '../components/FooterLinks/FooterLinks'
import Button from '../components/Button/Button'
import Premium from '../components/Premium/Premium'
import PremiumCards from '../components/PremiumCards/PremiumCards'

function Home() {
  return (
    <div className={`${styles.mainContainer}`}>
      <header>
        <NavBar />
      </header>
      <main>
        <section className={`${styles.seccion1}`}>
          <article className={`${styles.articleSeccion1}`}>
            <h1>Cámbiate a Premium gratis por 1 mes</h1>
            <h2>Después, solo cuesta 5.99 USD al mes. Cancela tu suscripción cuando quieras.</h2>
            <div className={`${styles.buttonsSeccion1}`}>
              <div className={`${styles.divButtons}`}>
                <Button link="https://www.spotify.com/gt/purchase/offer/default-trial-1m?country=GT" text="empezar" />
              </div>
              <div className={`${styles.divButtons}`}>
                <Button link="https://www.spotify.com/gt/premium/?utm_source=gt-es_brand_contextual-desktop_text&utm_medium=paidsearch&utm_campaign=alwayson_latam_gt_premiumbusiness_core_brand+contextual-desktop+text+exact+gt-es+google&gad=1&gclid=CjwKCAjw04yjBhApEiwAJcvNof5jfpM93k0Ba0Jj_S3tuS0insZMWtuqaor24momSPIlKG8wn_clYRoCCVYQAvD_BwE&gclsrc=aw.ds#plans" text="ver planes" type="secondary" />
              </div>
            </div>
            <div className={`${styles.buttonsSeccion1}`}>
              <p className={`${styles.terminosSeccion1}`}>
                <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">
                  Se aplican Términos y Condiciones.
                </a>
                { ' El mes gratis no está disponible para los usuarios que ya hayan probado Premium.' }
              </p>
            </div>
          </article>
        </section>
        <section className={`${styles.seccion2}`}>
          <article className={`${styles.articleSeccion2}`}>
            <h2>¿Por qué cambiarse a Premium?</h2>
            <Premium />
          </article>
        </section>
        <section className={`${styles.seccion3}`}>
          <article className={`${styles.articleSeccion3}`}>
            <h2>Elige tu plan Premium</h2>
            <h3>Escucha sin límites en tu teléfono, tus altavoces y otros dispositivos.</h3>
            <PremiumCards />
          </article>
        </section>
      </main>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.footerCointainer}`}>
          <nav className={`${styles.navFooter}`}>
            <div className={`${styles.divLogoFooter}`}>
              <Logo />
              <InfoFooter />
              <SocialIcons />
            </div>
            <div className={`${styles.divRegion}`}>
              <a className={`${styles.aRegion}`} href="https://www.spotify.com/gt/select-your-country-region/">
                <svg className={`${styles.regionIcon}`} />
                Guatemala
              </a>
            </div>
            <div className={`${styles.bottomLinksFooter}`}>
              <FooterLinks />
              <span className={`${styles.bottomSpanFooter}`}>
                © 2023 Spotify AB
              </span>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Home
