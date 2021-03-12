import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  faCreditCard,
  faMobile,
  faShoppingCart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import creditCard from "../assets/creditCard.png";
import "./Credit.scss";

const Credit = () => (
  <Container className="my-5 pt-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 pl-0 px-lg-0">
        <Row>
          <h2 className="my-5 mx-5 credit-title">Cartão de crédito</h2>
        </Row>
        <Row className="mx-5">
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faCreditCard}
              size={2}
              textClassName="px-2 h5 text-muted"
            >
              Crédito Pessoal
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faMobile}
              size={2}
              textClassName="px-2 h5 text-muted"
            >
              APP
            </IconText>
          </Col>

          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faShoppingCart}
              size={2}
              textClassName="px-2 h5 text-muted"
            >
              Pagamentos Online
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faWallet}
              size={2}
              textClassName="px-2 h5 text-muted"
            >
              Carteira Digital
            </IconText>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5}>
        <Image src={creditCard} alt="Magbank Credit Card" fluid />
      </Col>
    </Row>
  </Container>
);

export default Credit;
