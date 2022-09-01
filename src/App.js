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

  function Partenaires() {
    const [index, setIndex] = useState(0);

    const mod = (n, m) => {
      let result = n % m;

      // Return a positive value
      return result >= 0 ? result : result + m;
    };

    const cards = [
      {
        id: "1",
        image: Solutions30,
      },
      {
        id: "2",
        image: partenairedhm,
      },
      {
        id: "3",
        image: partenairedhm2,
      },

      {
        id: "4",
        image: Trsb,
      },

      {
        id: "5",
        image: wise,
      },
    ];

    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1) % cards.length);
        console.log(index);
      }, 3000);
    }, [index]);

    return (
      <div className="App">
        <div className="carousel">
          {cards.map((item, i) => {
            const indexLeft = mod(index - 1, cards.length);
            const indexRight = mod(index + 1, cards.length);

            let className = "card";

            if (i === index) {
              className = "card card--active";
            } else if (i === indexRight) {
              className = "card card--right";
            } else if (i === indexLeft) {
              className = "card card--left";
            } else className = "card";

            return (
              <img
                key={item.id}
                className={className}
                src={item.image}
                alt="Comic"
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
