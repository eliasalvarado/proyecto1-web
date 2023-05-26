import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'
import Logo from '../Logo/Logo'
import NavBarComponent from '../NavBarComponent/NavBarComponent'

function NavBar() {
  // const [displayMenu, setDisplayMenu] = useState(false)
  const [navBarComponents, setNavBarComponents] = useState([])

  const navBarComponentsDemo = [
    { separador: false, link: 'https://www.spotify.com/gt/premium/', text: 'Premium' },
    { separador: false, link: 'https://support.spotify.com/', text: 'Ayuda' },
    { separador: false, link: 'https://www.spotify.com/gt/download/', text: 'Descargar' },
    { separador: true, link: '', text: '' },
    { separador: false, link: 'https://www.spotify.com/gt/signup/', text: 'Registrarse' },
    { separador: false, link: 'https://www.spotify.com/gt/login/?continue=https%3A%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1', text: 'Iniciar sesión' },
  ]

  useEffect(() => {
    setNavBarComponents(navBarComponentsDemo)
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
      <header className={`${styles.headerContainer}`}>
        <Logo />
        <nav role="navigation">
          <ul>
            {navBarComponents.map((component) => (
              <NavBarComponent
                separador={component.separador}
                link={component.link}
                text={component.text}
              />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
