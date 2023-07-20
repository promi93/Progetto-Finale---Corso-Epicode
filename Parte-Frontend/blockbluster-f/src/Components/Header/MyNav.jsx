import React, { useState, useEffect, useRef, useContext } from "react";
import { Navbar, Container, Nav, Form, Button, Modal } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { SearchContext } from "../Main/GamesPage/SearchProvider";

const MyNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const { searchTitle, setSearchTitle } = useContext(SearchContext);
  const inputRef = useRef(null);
  const searchBtnRef = useRef(null);

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

  const handleSearchToggle = (e) => {
    setShowSearch(!showSearch);
    setSearchTitle("");
    if (!showSearch) {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 0);
    }
  };

  const handleRegister = () => {
    openRegisterModal();
    closeModal();
  };

  const handleDocumentClick = (event) => {
    if (
      searchBtnRef?.current?.contains(event.target) ||
      inputRef?.current?.contains(event.target)
    ) {
      return;
    }
    setShowSearch(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav shadow">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-4">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5 ps-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contacts">Contatti</Nav.Link>
            <Nav.Link href="/chisiamo">Chi Siamo</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center justify-content-center">
            {showSearch && (
              <Form.Control
                type="search"
                placeholder="cerca..."
                className="me-2 search-box"
                aria-label="Search"
                id="outlineBtn"
                ref={inputRef}
                value={searchTitle} // Assegna il valore di searchTitle all'input
                onChange={(e) => setSearchTitle(e.target.value)} // Aggiorna searchTitle quando l'utente digita
              />
            )}{" "}
            <Button
              className={`search-btn ${showSearch ? "hidden" : ""}`}
              variant="transparent"
              onClick={handleSearchToggle}
              ref={searchBtnRef}
            >
              <BsSearch />
            </Button>
            <FaUser className="user shadow" onClick={openModal} />
          </Form>
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
