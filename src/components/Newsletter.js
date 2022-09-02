import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Solutions30 from "./../assets/img/Solutions-30.png";
import partenairedhm2 from "./../assets/img/partenairedhm2.png";
import partenairedhm from "./../assets/img/partenairedhm.png";
import Trsb from "./../assets/img/Trsb.png";
import wise from "./../assets/img/wise.png";
import TestiMonialsDetails2 from './testi2';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './../TestiMonial2.css'





export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      img2: Solutions30,
    },
    {
      id: "2",
      img2: partenairedhm,
    },
    {
      id: "3",
      img2: partenairedhm2,
    },

    {
      id: "4",
      img2: Trsb,
    },

    {
      id: "5",
      img2: wise,
    },
  ]
  const options =
  {

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

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
            <div className= "col-md-12">
              <h3>
                Nos Partenaires<br></br> 
              </h3>
              <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                              {
                                  cards.length === 0 ?
                                      <div class="item">
                                          <div class="shadow-effect">
                                              
                                              
                                          </div>
                                          <div class="testimonial-name">
                                              <h5>Rajon Rony</h5>
                                              <small>ITALY</small>
                                          </div>
                                      </div> :
                                      cards.map(testiMonialDetail2 => {
                                          return (
                                              <TestiMonialsDetails2 testiMonialDetail2={testiMonialDetail2} key={testiMonialDetail2._key} />

                                          )
                                      })
                              }
              </OwlCarousel>
            
           </div>
          </Row>
      </div>
    </Col>
  );
};
export default Newsletter;


/*<div className="App2">
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
            </div> */