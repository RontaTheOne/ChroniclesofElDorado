import React from "react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../../assets/styles/about.css";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, EffectFade } from "swiper/modules";

const TERRITORIES = [
  {
    eyebrow: "DONDE COMIENZA EL MITO",
    name: "CHRONICLES OF EL DORADO",
    description:
      "Viaja 2.500 años al pasado y encarna a Bochica, el dios civilizador de los muiscas. Une tribus nómadas, forja alianzas con los dioses existentes y enfréntate a la oscuridad que amenaza el territorio ancestral. Tus decisiones definirán el nacimiento de la cultura que trascendió en el tiempo como la cuna del dorado.",
    icono: "../../assets/images/Icono2.png",
    images: [
      {
        src: "https://i.pinimg.com/originals/54/49/55/5449558134e3a182c1982919662585f5.jpg",
        alt: "Vista panorámica de Muzo al atardecer",
      },
      {
        src: "https://i.pinimg.com/474x/e6/33/bb/e633bb8c68c861b0a89edc9a96b56527.jpg",
        alt: "Ruinas del Templo del Sol",
      },
      {
        src: "https://i.pinimg.com/236x/cf/09/ac/cf09ac5d26b1dd1349ffab66d4e4b356.jpg",
        alt: "Laguna de Guatavita desde lo alto",
      }
    ],
  },
];

const MAP_LABELS = ["GUATAVITA", "BACATÁ", "IGUAQUE", "HUNZA", "SOGAMOSO"];

function About({ territories = TERRITORIES, mapLabels = MAP_LABELS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("territory-visible");
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const territory = territories[activeIndex];

  return (
    <section
      className="territory-section"
      ref={sectionRef}
      id="About"
    >
      <div className="territory-map-labels" aria-hidden="true">
        <span className="label-1">{mapLabels[0]}</span>
        <span className="label-2">{mapLabels[1]}</span>
        <span className="label-3">{mapLabels[2]}</span>
        <span className="label-4">{mapLabels[3]}</span>
        <span className="label-5">{mapLabels[4]}</span>
      </div>

      <div className="territory-grid">
        <div className="row gy-4 gy-lg-0">
          {/* Columna de texto */}
          <div className="col-lg-7 order-1 order-lg-1 territory-content">
            <p className="territory-eyebrow">{territory.eyebrow}</p>
            <h2 className="territory-name">{territory.name}</h2>

             <img src={territory.icono} className="territory-icon" alt="Chronicles of El Dorado" />

            <div className="territory-divider" role="presentation">
              <span className="territory-divider-marks">◆ ◆ ◆</span>
              <span className="territory-divider-line" />
            </div>

            <p className="territory-description">{territory.description}</p>

            <div className="text-center">
              <a href="#reservar" className="territory-cta">
                Únete a la lista de espera
              </a>
             </div>
          </div>

          {/* Columna de galería */}
          <div className="col-lg-5 order-2 order-lg-2 territory-gallery-column">
            <div className="territory-gallery">
              <Swiper
                modules={[Thumbs, EffectFade, Autoplay]}
                effect="fade"
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                className="gallery-main"
              >
                {territory.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img.src} alt={img.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                direction="vertical"
                slidesPerView={3}
                spaceBetween={16}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                className="gallery-thumbs"
              >
                {territory.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img.src} alt={img.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
