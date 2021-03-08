import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./CtaButton.scss";

const CtaButton = ({ children }) => (
  <Container className="pb-3">
    <Row className="d-flex justify-content-center">
      <Button className="my-5 px-5 py-2 btn-cta" variant="success" size="lg">
        {children}
      </Button>
    </Row>
  </Container>
);

export default CtaButton;
