import React from "react";
const Specifications = [
  {
    label: "OS:",
    value: (
      <>
        Windows 7 64-bit only
        <br />
        (No OSX support at this time)
      </>
    ),
  },
  {
    label: "Processor:",
    value: (
      <>
        Intel Core 2 Duo @ 2.4 GHZ or
        <br />
        AMD Athlon X2 @ 2.8 GHZ
      </>
    ),
  },
  {
    label: "Memory:",
    value: "8 GB RAM",
  },
  {
    label: "Storage:",
    value: "8 GB available space",
  },
  {
    label: "Graphics:",
    value: (
      <>
        NVIDIA GeForce GTX 660 2GB or
        <br />
        AMD Radeon HD 7850 2GB (DX11, Shader Model 5)
      </>
    ),
  },
  {
    label: "Sound Card:",
    value: "DirectX Compatible",
  },
];
 
function Requeriments() {
   return (
    <section className="sysreq-stage">
      <div className="sysreq-side-image" />
 
      <div className="sysreq-content">
        <div className="sysreq-wrap">
          <p className="sysreq-eyebrow">CAN MY COMPUTER RUN THIS GAME?</p>
          <h1 className="sysreq-title">SYSTEM REQUIREMENTS</h1>
 
          <div className="sysreq-grid">
            {Specifications.map((spec, i) => (
              <div className="sysreq-cell" key={spec.label}>
                <div className="sysreq-label">{spec.label}</div>
                <div className="sysreq-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requeriments;