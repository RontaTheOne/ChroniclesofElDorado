import React, { useState, useEffect, useRef } from "react";
import NewsModal from "./newsModal";
import "../../assets/styles/news.css";

const NEWS = [
  {
    id: "bochica-teaser",
    type: "lore",
    typeLabel: "Lore",
    date: "12 May, 2026",
    title: "Bochica desciende: primer teaser cinemático",
    description:
      "Se revela el primer adelanto de Chronicles of El Dorado, mostrando la llegada del legislador a las tierras Muiscas.",
    image: "https://images.unsplash.com/photo-1568489711036-9c94a7d5aea6?auto=format&fit=crop&w=1600&q=80",
  },
];

function News({
  backgroundImage = "https://images.unsplash.com/photo-1568489711036-9c94a7d5aea6?auto=format&fit=crop&w=1600&q=80",
}) {
  const [selectedNews, setSelectedNews] = useState(null);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const openModal = (item) => setSelectedNews(item);
  const closeModal = () => setSelectedNews(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const SPEED = 0.35; 
    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Progreso de -1 (sección debajo del viewport) a 1 (sección arriba del viewport)
      const progress = (rect.top - viewportH) / (viewportH + rect.height);
      const offset = progress * rect.height * SPEED;

      bg.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="news-wrap" ref={sectionRef}>
      <div
        className="news-bg"
        ref={bgRef}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="news-header">
        <span className="rule"></span>
        <h2>Noticias</h2>
        <span className="rule"></span>
        <h3>Últimas novedades de Chronicles of El Dorado</h3>
      </div>

      <div className="container">
        <div className="row g-4">
          {NEWS.map((item) => (
            <div className="col col-sm-12 col-md-4" key={item.id}>
              <div className="news-card">
                <div className="thumb">
                  <img
                    className="thumb-img"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <div className="card-footer-row">
                    <span className="news-date">{item.date}</span>
                    <span className={`news-type news-type-${item.type}`}>
                      <span className="diamond"></span> {item.typeLabel}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <button
                    type="button"
                    className="news-read-more"
                    onClick={() => openModal(item)}
                  >
                    Descubrir
                    <i className="fa-solid fa-circle-arrow-right arrow-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
    </section>
  );
}

export default News;