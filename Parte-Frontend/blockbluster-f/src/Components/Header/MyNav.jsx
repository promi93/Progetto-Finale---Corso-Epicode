// MyNav.js
import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Button, Modal } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const MyNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openRegisterModal = () => {
    setRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setRegisterModal(false);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleRegister = () => {
    openRegisterModal();
    closeModal();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav shadow">
      <Container fluid>
        <Navbar.Brand href="/">BlockBluster</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-4">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5 ps-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contacts">Contatti</Nav.Link>
            <Nav.Link href="#action3">Su di noi</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {showSearch && (
              <Form.Control
                type="search"
                placeholder="cerca..."
                className="me-2"
                aria-label="Search"
                id="outlineBtn"
              />
            )}
            <Button
              className={`search-btn ${showSearch ? "hidden" : ""}`}
              variant="transparent"
              onClick={handleSearchToggle}
            >
              <BsSearch />
            </Button>
          </Form>
          <FaUser className="user" onClick={openModal} />
          <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LoginForm onRegister={handleRegister} />
            </Modal.Body>
          </Modal>

          <Modal show={registerModal} onHide={closeRegisterModal}>
            <Modal.Header closeButton>
              <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RegisterForm />
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
