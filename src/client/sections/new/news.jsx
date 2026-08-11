import React from 'react';
import "../../assets/styles/news.css";

const NEWS_ITEMS = [
  {
    id: 'bochica-teaser',
    type: 'lore',
    typeLabel: 'Lore',
    date: '12 May, 2026',
    title: 'Bochica desciende: primer teaser cinemático',
    description:
      'Se revela el primer adelanto de TAYAKUNA, mostrando la llegada del legislador a las tierras Muiscas.',
    image: '/assets/img/news/bochica-teaser.jpg',
  },
  {
    id: 'reparto-arte',
    type: 'desarrollo',
    typeLabel: 'Desarrollo',
    date: '04 May, 2026',
    title: 'Arte conceptual: el reparto de El Dorado',
    description:
      'Un vistazo al diseño visual de Hunzahúa, Chibchacum y Chía antes de su presentación oficial.',
    image: '/assets/img/news/reparto-arte.jpg',
  },
  {
    id: 'directo-comunidad',
    type: 'eventos',
    typeLabel: 'Eventos',
    date: '28 Abr, 2026',
    title: 'Convocatoria: primer directo de la comunidad',
    description:
      'Únete a la transmisión en vivo donde presentaremos el mundo de TAYAKUNA por primera vez.',
    image: '/assets/img/news/directo-comunidad.jpg',
  },
];

export default function News({
  backgroundImage = 'https://images.unsplash.com/photo-1568489711036-9c94a7d5aea6?auto=format&fit=crop&w=1600&q=80',
}) {
  const wrapStyle = backgroundImage
    ? { '--news-bg-image': `url(${backgroundImage})` }
    : undefined;

  return (
    <section className="news-wrap" style={wrapStyle}>
      <div className="news-header">
        <span className="rule"></span>
        <h2>Noticias</h2>
        <span className="rule"></span>
      </div>

      <div className="container">
        <div className="row g-4">
          {NEWS_ITEMS.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}