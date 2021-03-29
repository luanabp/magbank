import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = () => (
  <Container className="dashboard py-5">
    <Row>
      <Col xs={12} lg={4}>
        <Row className="align-items-center mb-5">
          <Col xs={3}>
            <span className="dashboard__user-avatar">
              <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
              <FontAwesomeIcon
                className="dashboard__user-icon"
                icon={faUser}
                size="3x"
                color="#7C7C7C"
              />
            </span>
          </Col>
          <Col xs={9}>
            <h4>
              <strong>Luana Bonin</strong>
            </h4>
            <p className="text-muted">ag: 1234 c/c: 4321-5</p>
          </Col>
        </Row>
        <Button
          className="dashboard__button dashboard__button--active text-left"
          variant="link"
          block
          size="lg"
        >
          Minha Conta
        </Button>
        <Button
          className="dashboard__button text-left"
          variant="link"
          block
          size="lg"
        >
          Pagamento
        </Button>
        <Button
          className="dashboard__button text-left"
          variant="link"
          block
          size="lg"
        >
          Extrato
        </Button>
      </Col>
      <Col xs={12} lg={3}></Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default Dashboard;
