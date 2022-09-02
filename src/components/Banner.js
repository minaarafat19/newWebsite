import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import firstimage from "./../assets/img/firstimage.png";
import Video1 from "../assets/img/Video_Dhm.mp4";
import logo from "../assets/img/logo.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
           
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`Un Tremplin vers le monde professionnel`} </h1>
                  <p>
                    DHM Engineer est un incubateur de talent technique visant à améliorer 
                    l’insertion des acteurs de l’informatique dans le monde professionelle.
                     Notre vision est d’accompagner les techniciens durant leurs parcours professionnelle à 
                     trouver leurs voix en proposant des missions diverse et varié dans le secteur des systèmes 
                     et réseaux.

                    DHM Engineer est constitué d’une equipe d’expert et passioné par 
                    la réussite des projets de nos clients et partenaire.
                  </p>
                   
              </div>}

             
            </TrackVisibility>
          </Col>
         <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                 <div class="video-wrapper"> <video src={Video1} width= "600px" height="300px" autoPlay loop muted/></div>
                </div>
              )}
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

          </Col> */
/*<span className="tagline">DHM Engineer</span> */

