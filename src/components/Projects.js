import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from './TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import service1 from "../assets/img/service1.png";
import pro from "./../../src/assets/img/black.png";
import pic from "./../../src/assets/img/service1.png";
import pic2 from "./../../src/assets/img/avatargirl.png";
import pic3 from "./../../src/assets/img/avatargarcon.png";
import './../TestiMonials.css'


export const Projects = () => {

  const testiMonials = [
        {
            name: 'Mohammed Ali',
            description: 'j´ai commencé mon aventure avec DHM Engineer en F2vrier 2022 en ayant des missions techniquement formative, ce qui m´a permis d´acquerir au et a mesure de l´experience et des excellentes bases technicien informatique',
            address: 'Coordinateur',
            img: pic,
        
        },
        {
            name: 'Amina',
            description: 'Quelques semaines semaines passées dans cette entreprise m’ont permis de pouvoir acquérir un grand nombre de compétence en termes technique mais aussi en matière de valeurs et relation humaine, quelques traits de caractère que j’ai pu forger en moi.  ',
            address: 'Stagiaire',
            img: pic2,
          
        },
        {
            name: 'Moussa',
            description: 'Anis m´a contacté lors de mon stage, je ne m´attendais pas à obtenir un emploi. Pas seulement un simple emploi, mais un projet pour devenir auto-entrepreneur en tant que Technicien systèmes et réseaux à la fin de mon stage même voir inespéré.',
            address: 'Technicien',
            img: pic3
            
        },
       
    ]





     const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout:4500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };



  const projects = [
    {
      title: "Technicien",
      description: "Des missions diverses et variées",
      imgUrl: pro,
    },
    {
     title: "Admin Réseaux",
      description: "Junior ou expert",
      imgUrl: pro,
    },
    {
     title: "Maintenance",
      description: "Assurer le fonctionnement continue des équipements informatiques",
      imgUrl: pro,
    },
    {
     title: "Support",
      description: "Être à l’écoute des utilisateurs",
      imgUrl: pro,
    },
    {
     title: "Déploiement",
      description: "Assurer le changement de matériel sur site",
      imgUrl: pro,
    },
    {
     title: "Coordinateur",
      description: "La passerelle entre la direction et les techniciens",
      imgUrl: pro,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Nos propositions</h2><br></br><br></br>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="miniTitle text-center">Temoignage</h4>
                <div className="text-center ">
                    <h3 className="sectionTitle">Ce qu'ils pensent de nous...</h3>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={service1} />

                                            
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}
