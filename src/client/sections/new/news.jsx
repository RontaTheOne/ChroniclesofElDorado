import React from "react";
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
    image: "/assets/img/news/bochica-teaser.jpg",
  },
];

export default function News({
  backgroundImage = "https://images.unsplash.com/photo-1568489711036-9c94a7d5aea6?auto=format&fit=crop&w=1600&q=80",
}) {
  const wrapStyle = backgroundImage
    ? { "--news-bg-image": `url(${backgroundImage})` }
    : undefined;

  return (
    <section className="news-wrap" style={wrapStyle}>
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
                    onClick={() => {
                      /* abrir tu modal existente aquí */
                    }}
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
    </section>
  );
}
