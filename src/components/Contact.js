import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import lastPic from "../assets/img/pic.jpng.jpg";
import emailjs from "emailjs-com";
import picc from "../assets/img/11-removebg-preview.png";
import mindpic from "../assets/img/iii-removebg-preview.png";
export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l16ftb7",
        "template_6c9na3n",
        e.target,
        "hSKe7IxKrcwC8LM3N",
        this
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={mindpic}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Reserver</h2>
                  <form
                    enctype="multipart/form-data"
                    method="post"
                    onSubmit={sendEmail}
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Prénom"
                          name="first_name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Nom" name="name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email" name="email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="téléphone" name="num" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <label>Votre CV </label>
                        <input type="file" name="my_file" />
                        <button type="submit" value="send Message">
                          Envoyer
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
