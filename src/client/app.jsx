import React from "react";
import Navbar from "./layout/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Character from "./sections/character.jsx";
import News from "./sections/news.jsx";
import Reserve from "./sections/reserve.jsx";
import Requeriments from "./sections/requeriments.jsx";
import Footer from "./layout/footer.jsx";

function App() {
   return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <About />
      <Character />
      <News />
      <Reserve />
      <Requeriments />
      <Footer />
    </div>
  );
}

export default App;