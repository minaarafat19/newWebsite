import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Solutions30 from "./../assets/img/Solutions-30.png";
import partenairedhm2 from "./../assets/img/partenairedhm2.png";
import partenairedhm from "./../assets/img/partenairedhm.png";
import Trsb from "./../assets/img/Trsb.png";
import wise from "./../assets/img/wise.png";

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
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <div className= "col-md-12">
            <h3>
              partenaires...?<br></br> ....
            </h3>
            <div className="App2">
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
          </div>
        </Row>
      </div>
    </Col>
  );
};
export default Newsletter;


