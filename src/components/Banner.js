import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import firstimage from "./../assets/img/firstimage.png";
import service1 from "../assets/img/service1.png";
import logo from "../assets/img/logo.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Maintenance reseaux", "Accompagnement", "Polyvalence"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>

              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`"Un Tremplin vers le monde professionnel"`} </h1>
                  <p>
                    DHM Engineer est un incubateur de talent technique visant à améliorer 
                    l’insertion des acteurs de l’informatique dans le monde professionelle.
                     Notre vision est d’accompagner les techniciens durant leurs parcours professionnelle à 
                     trouver leurs voix en proposant des missions diverse et varié dans le secteur des systèmes 
                     et réseaux.

                    DHM Engineer est constitué d’une equipe d’expert et passioné par 
                    la réussite des projets de nos clients et partenaire.
                  </p>
                  <button onClick={() => console.log('connect')}>Test<ArrowRightCircle size={25} /></button>
              </div>}

             
            </TrackVisibility>
          </Col>
         
        </Row>
      </Container>
    </section>
  )
}
/*<Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src="" alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
<<<<<<< HEAD
          </Col> */
/*<span className="tagline">DHM Engineer</span> */

