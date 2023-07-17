import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import RegisterForm from "./RegisterForm";
import { Modal } from "react-bootstrap";

function MyNav() {
  const [showSearch, setShowSearch] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleRegister = (userData) => {
    fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registrazione avvenuta con successo");
          setRegisteredUser(userData);
        } else {
          throw new Error("Errore durante la registrazione");
        }
      })
      .catch((error) => {
        console.error("Errore durante la registrazione:", error.message);
      });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav shadow">
      <Container fluid>
        <Navbar.Brand href="#">BlockBluster</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-4">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5 ps-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contatti</Nav.Link>
            <Nav.Link href="#action3">About us</Nav.Link>
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
              <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RegisterForm onRegister={handleRegister} />
            </Modal.Body>
          </Modal>
          {showRegisterForm && <RegisterForm />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
