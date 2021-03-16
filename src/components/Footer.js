import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/MAGbank.png";
import apple from "../assets/apple.png";
import gplay from "../assets/gplay.png";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer pt-5 pb-4">
    <Container>
      <Row className="text-center">
        <Col xs={12} lg={6} className="text-lg-left">
          <Image src={logo} className="mb-4" />
        </Col>

        <Col xs={12} lg={4} className="mb-4">
          <Image src={apple} />
          <Image src={gplay} className="ml-2" />
        </Col>

        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center pb-3"
        >
          <a href="http://facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#7c7c7c"
              size="2x"
            />
          </a>
          <FontAwesomeIcon
            icon={faTwitter}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
