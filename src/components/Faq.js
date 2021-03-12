import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./Faq.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: "Cartão de crédito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <Row className="justify-content-center">
          <h2 className="faq-title pb-5 my-5">Dúvidas frequentes</h2>
        </Row>

        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? "#fff" : "#ffffff50"}
                    onClick={() => setIndex(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-5">
              <p className="lead">{options[index].text}</p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className="faq-clickable mb-3"
                textClassName="lead px-0"
                color={key === index ? "#fff" : "#ffffff50"}
                onClick={() => setIndex(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  Nulla porttitor eros ac ex trstique posuere
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                  Quisque fringilla tincidunt arcu
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                  Nam elementum labortis purus a maximus tortor
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
