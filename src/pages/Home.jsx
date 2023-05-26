import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Logo from '../components/Logo/Logo'
import styles from './Home.module.css'
import InfoFooter from '../components/InfoFooter/InfoFooter'
import SocialIcons from '../components/SocialIcons/SocialIcons'

function Home() {
  return (
    <div className={`${styles.mainContainer}`}>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          main
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
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Home
