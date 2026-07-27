import React from "react";
import { useEffect, useRef, useState } from "react";
import '../../assets/styles/about.css'

const TERRITORIES = [
  {
    eyebrow: "DONDE COMIENZA EL MITO",
    name: "CHRONICLES OF EL DORADO",
    description:
      "Viaja 2.500 años al pasado y encarna a Bochica, el dios civilizador de los muiscas. Une tribus nómadas, forja alianzas con los dioses existentes y enfréntate a la oscuridad que amenaza el territorio ancestral. Tus decisiones definirán el nacimiento de la cultura que trascendió en el tiempo como la cuna del dorado.",
    environmentTitle: "ENTORNO",
    environment:
      "El Bioma de Niebla — definido por su carácter andino inconfundible. La piedra musgosa, los frailejones y la niebla dorada del atardecer conforman un bioma hostil, pero imponente, listo para ser explorado.",
    images: [
      { src: "/assets/territory/muzo-main.jpg", alt: "Vista panorámica de Muzo al atardecer" },
      { src: "/assets/territory/muzo-detail-1.jpg", alt: "Ruinas del Templo del Sol" },
      { src: "/assets/territory/muzo-detail-2.jpg", alt: "Laguna de Guatavita desde lo alto" },
    ],
  },
];

const MAP_LABELS = ["GUATAVITA", "BACATÁ", "IGUAQUE"];

function About({ territories = TERRITORIES, mapLabels = MAP_LABELS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
 
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("territory-visible");
        }
      },
      { threshold: 0.25 }
    );
 
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
 
  const territory = territories[activeIndex];
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < territories.length - 1;

  return (
     <section className="territory-section" ref={sectionRef} id="territorySection">
      <div className="territory-map-labels" aria-hidden="true">
        <span className="label-1">{MAP_LABELS[0]}</span>
        <span className="label-2">{MAP_LABELS[1]}</span>
        <span className="label-3">{MAP_LABELS[2]}</span>
      </div>
 
      <div className="territory-grid">
        <div className="row gy-4 gy-lg-0 align-items-start">
 
          {/* Columna de texto */}
          <div className="col-lg-7 order-2 order-lg-1 territory-content">
            <p className="territory-eyebrow">{territory.eyebrow}</p>
            <h2 className="territory-name">{territory.name}</h2>
 
            <div className="territory-divider" role="presentation">
              <span className="territory-divider-marks">◆ ◆ ◆</span>
              <span className="territory-divider-line" />
            </div>
 
            <p className="territory-description">{territory.description}</p>
 
          </div>
 
          {/* Columna de galería */}
          <div className="col-lg-5 order-1 order-lg-2 territory-gallery-column">
            <button
              type="button"
              className="territory-arrow"
              onClick={() => canGoPrev && setActiveIndex((i) => i - 1)}
              disabled={!canGoPrev}
              aria-label="Territorio anterior"
            >
              ▲
            </button>
 
            <div className="ratio ratio-4x3 w-100 territory-gallery-main">
              <img
                src={territory.images[0]?.src}
                alt={territory.images[0]?.alt}
                className="object-fit-cover"
              />
            </div>
 
            <div className="territory-gallery-thumbs">
              {territory.images.slice(1).map((img) => (
                <div
                  className="ratio territory-gallery-thumb"
                  style={{ "--bs-aspect-ratio": "38.75%" }}
                  key={img.src}
                >
                  <img src={img.src} alt={img.alt} className="object-fit-cover" />
                </div>
              ))}
            </div>
 
            <button
              type="button"
              className="territory-arrow"
              onClick={() => canGoNext && setActiveIndex((i) => i + 1)}
              disabled={!canGoNext}
              aria-label="Siguiente territorio"
            >
              ▼
            </button>
          </div>
 
        </div>
      </div>
    </section>
  );
}

export default About;