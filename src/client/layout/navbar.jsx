import React from "react";

function Navbar() {
  return (
    <div  className="navbar">
      <nav>
        <ul>
          <li><a href="#Hero">Inicio</a></li>
          <li><a href="#History">Historia</a></li>
          <li><a href="#Characters">Personajes</a></li>
          <li><a href="#News">Noticias</a></li>
          <li><a href="#Reserve">Reservar</a></li>
        </ul>
      </nav>  
    </div>
  );
}

export default Navbar;