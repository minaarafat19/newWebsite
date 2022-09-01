import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import styled from "styled-components";
import service1 from "../assets/img/service1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "../components/counter";

export const Skills = () => {
  const data = [
    {
      image: service1,
      title: "Polyvalence",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service1,
      title: "Polyvalence",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service1,
      title: "Polyvalence",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service1,
      title: "Polyvalence",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Nos Chiffres</h2>
              <div className="Affichage">
                <header className="Aff-header">
                  <CountUp end={+20} start={0} />
                  {""}
                  <header className="">% de techniciens actuelles</header>
                  <CountUp end={250} start={0} /> missions réalisés en 2022
                  <CountUp end={7} start={0} /> Agences implantés en france
                  métropolitaine
                </header>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={service1} alt="Image" />
                  <h5></h5>
                </div>
                <div className="item">
                  <img src={service1} alt="Image" />
                  <h5></h5>
                </div>
                <div className="item">
                  <img src={service1} alt="Image" />
                  <h5></h5>
                </div>
                <div className="item">
                  <img src={service1} alt="Image" />
                  <h5>Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <section className="whoAreWe">
        <div className="who">
          {" "}
          <h3>
            {" "}
            <strong>
              Qui sommes <h2 className="us">Nous ?</h2>
            </strong>
          </h3>
          <p className="us-text">
            {" "}
            Fondée en 2020 par Aniss Dahmane, Ingénieur en réseaux et
            télécommunication et Professeur des écoles. DHM Engineer est une
            entreprise spécialisé dans le consulting et les prestations
            informatiques. Elle est composé de techniciens en systèmes et
            réseaux de qualité et à fort potentiel d'évolution.
          </p>
        </div>
      </section>

      <h1 className="valeurs">
        Nos Points <strong className="strg"> Forts</strong>
      </h1>
      <Section id="services">
        <div className="services">
          {data.map(({ image, title, description }) => {
            return (
              <div className="service" key={title}>
                <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>

                <FontAwesomeIcon icon="fa-solid fa-circle-info" beatFade />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </section>
  );
};
const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    border-radius= 15%;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
/**<img className="background-image-left" src={colorSharp} alt="Image" /> */
