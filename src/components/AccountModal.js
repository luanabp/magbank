import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./AccountModal.scss";

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className="form-title">Abra sua conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="form-group-label mt-2" controlId="formBasicName">
          <Form.Label>Seu nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>

        <Form.Group
          className="form-group-label mt-2"
          controlId="formBasicEmail"
        >
          <Form.Label>Seu e-mail</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group className="form-group-label mt-2" controlId="formCity">
          <Form.Label className="my-1 mr-2" htmlFor="formCitySelect">
            Sua cidade
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="formCitySelect"
            custom
          >
            <option value="0">Selecione...</option>
            <option value="1">Florianópolis - SC</option>
            <option value="2">Palhoça - SC</option>
            <option value="3">São José - SC</option>
            <option value="4">Biguaçu - SC</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Eu li e concordo com os termos de uso."
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={handleClose}
        className="py-1 px-3 btn-cancel"
      >
        Cancelar
      </Button>
      <Button
        variant="primary"
        className="py-1 px-3 btn-account"
        onClick={handleClose}
      >
        Criar Conta
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AccountModal;
