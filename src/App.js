import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Solutions30 from "./assets/img/Solutions-30.png";
import partenairedhm from "./assets/img/partenairedhm.png";
import partenairedhm2 from "./assets/img/partenairedhm2.png";
import Trsb from "./assets/img/Trsb.png";
import wise from "./assets/img/wise.png";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );

  
}

export default App;
