import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./CtaButton.scss";

const CtaButton = ({ children, onClick }) => (
  <Container className="pb-3">
    <Row className="d-flex justify-content-center">
      <Button
        variant="success"
        className="my-5 px-5 py-2 btn-cta"
        size="lg"
        onClick={onClick}
      >
        {children}
      </Button>
    </Row>
  </Container>
);

export default CtaButton;
