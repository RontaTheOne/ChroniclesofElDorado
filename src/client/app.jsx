import React from "react";
import Cursor from "./layout/cursor.jsx";
import Header from "./layout/header.jsx";
import Hero from "./sections/hero/hero.jsx";
import About from "./sections/about/about.jsx";
import Character from "./sections/character.jsx";
import News from "./sections/new/news.jsx";
import Reserve from "./sections/reserve.jsx";
import Requeriments from "./sections/requeriments.jsx";
import Footer from "./layout/footer.jsx";
import './assets/styles/variable.css'
import './assets/styles/globals.css'

function App() {
   return (
    <div className="landing-page">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Character />
        <News />
        <Reserve />
        <Requeriments />
      </main>
      <Footer />
    </div>
  );
}

export default App;