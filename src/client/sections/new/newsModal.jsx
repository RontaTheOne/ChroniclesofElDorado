import React, { useEffect } from "react";
import "../../assets/styles/newsModal.css";
function NewsModal({ news, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  if (!news) return null;

  return (
    <>
      <div
        className="modal fade show news-modal"
        tabIndex="-1"
        style={{ display: "block" }}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="modal-dialog modal-dialog-centered news-modal-dialog">
          <div className="modal-content news-modal-content">
            <div className="modal-header">
              <span className={`news-type news-type-${news.type}`}>
                <span className="diamond"></span> {news.typeLabel}
              </span>
              <button
                type="button"
                className="btn-close"
                aria-label="Cerrar"
                onClick={onClose}
              ></button>
            </div>

            <img
              className="news-modal-img"
              src={news.image}
              alt={news.title}
            />

            <div className="modal-body">
              <span className="news-date">{news.date}</span>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
}

export default NewsModal;