import React from "react";
import { useHeaderScroll } from '../hooks/useHeaderScroll.js'
import '../assets/styles/header.css'

function Header() {
  const scrolled = useHeaderScroll(50)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo">Chronicle of El Dorado</div>
        <div className="nav-links">
          <a href="#Hero">Inicio</a>
          <a href="#History">Historia</a>
          <a href="#Characters">Personajes</a>
          <a href="#News">Noticias</a>
          <a href="#Reserve">Reservar</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;