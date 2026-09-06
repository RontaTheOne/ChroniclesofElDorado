import React from "react";
import "../../assets/styles/requeriments.css";

function Requeriments() {
  const Image =  "https://www.worldhistory.org/img/c/p/1200x627/2507.jpg";

  const Specifications = [
    {
      label: "SO:",
      value: <>Windows 10/11 de 64 bits</>,
    },
    {
      label: "Procesador:",
      value: <>Intel Core i5-8400 / AMD Ryzen 5 2600</>,
    },
    {
      label: "memoria RAM:",
      value: "16 GB ",
    },
    {
      label: "Almacenamiento:",
      value: "45 GB DISPONIBLES",
    },
    {
      label: "Gráficos:",
      value: <>NVIDIA GTX 1060 6 GB / AMD RX 580 8 GB</>,
    },
    {
      label: "DirectX:",
      value: "DirectX 12",
    },
  ];

  return (
    <section className="sysreq-stage">
      <div className="sysreq-content">
        <div className="sysreq-wrap">
          <p className="sysreq-eyebrow text-center">
            ¿TU COMPUTADOR ESTÁ LISTO PARA LA AVENTURA?
          </p>
          <h1 className="sysreq-title text-center">REQUERIMIENTOS MÍNIMOS</h1>

          <div className="sysreq-grid">
            {Specifications.map((spec) => (
              <div className="sysreq-cell" key={spec.label}>
                <div className="sysreq-label">{spec.label}</div>
                <div className="sysreq-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sysreq-side-image">
        <img
          src={Image}
          alt="Requerimientos del sistema"
          className="w-100 h-100"
        />
      </div>
    </section>
  );
}

export default Requeriments;
