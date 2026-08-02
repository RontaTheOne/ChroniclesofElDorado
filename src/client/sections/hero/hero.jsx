import Particles from './Particles.jsx'
import { useParallax } from '../../hooks/useParallax.js'
import { useReveal } from '../../hooks/useReveal.js'
import '../../assets/styles/hero.css'

function Hero() {
  const parallaxRef = useParallax(45)
  const [revealRef, active] = useReveal(0.2)

  return (
    <section className="hero" id="Hero">
      <div ref={parallaxRef} className="parallax-layer" />
      <Particles amount={45} />

      <div
        ref={revealRef}
        className={`hero-content reveal-element ${active ? 'active' : ''}`}
      >
        <h1>Una historia de origen del Dorado.</h1>
        <p>
          Un videojuego de Acción y Aventura inspirado en la cultura muisca donde explorarás territorios sagrados, enfrentarás antiguos dioses y descubrirás el verdadero origen de El Dorado.
        </p>
      <div className="platform-icons">
          <h5>Próximamente en</h5>
          <div className="platform-list">
              <i className="fa-brands fa-steam"></i>
              <i className="fa-brands fa-windows"></i>
          </div>
      </div>
      <div className="hero-cta">
        <button className="cta-btn btn">Ver Trailer</button>
        <button className="cta-btn btn">Reservarlo ahora</button>
      </div>
      <div className="scroll-indicator">
        <span>Desliza para descubrir más</span>
        <i className="fa-solid fa-chevron-down scroll-icon"></i>
      </div>
      </div>
    </section>
  )
}

export default Hero;