import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
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
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
        <h3 className="my-5">Conta Corrente</h3>
        <h6>
          <small>
            <strong>Saldo em conta corrente</strong>
          </small>
        </h6>
        <h4 className="text-success mb-4">
          <strong>
            <small>R$ </small>3.500<small>,00</small>
          </strong>
        </h4>
        <h6>
          <small>
            <strong>Cheque especial</strong>
          </small>
        </h6>
        <p className="mb-0">Limite disponível</p>
        <p className="mb-4">R$ 5.000,00</p>
        <Button variant="secondary">Ver extrato</Button>
      </Col>
      <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
        <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
          <Tab eventKey="latest" title="Últimos Lançamentos">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>22/07</td>
                  <td>SAQUE 24H 012345</td>
                  <td>300,00</td>
                </tr>
                <tr>
                  <td>21/07</td>
                  <td>SUPERMERCADO 2312332</td>
                  <td>275,90</td>
                </tr>
                <tr>
                  <td>21/07</td>
                  <td>ESTACIONAMENTO 123234</td>
                  <td>12,00</td>
                </tr>
                <tr>
                  <td>21/07</td>
                  <td>PAGAMENTO ALUGUEL 123432</td>
                  <td>1.500,00</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="future" title="Lançamentos Futuros">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24/07</td>
                  <td>NETFLIX 012345</td>
                  <td>32,90</td>
                </tr>
                <tr>
                  <td>24/07</td>
                  <td>PRIME VIDEO 2312332</td>
                  <td>9,90</td>
                </tr>
                <tr>
                  <td>23/07</td>
                  <td>DISNEY+ 123234</td>
                  <td>27,90</td>
                </tr>
                <tr>
                  <td>22/07</td>
                  <td>HBO GO 123432</td>
                  <td>34,90</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
