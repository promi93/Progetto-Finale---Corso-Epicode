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
            <Nav.Link href="/home">Home</Nav.Link>
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
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            )}{" "}
            <Button
              className={`search-btn ${showSearch ? "hidden" : ""}`}
              variant="transparent"
              onClick={handleSearchToggle}
              ref={searchBtnRef}
            >
              <BsSearch className="fs-5" />
            </Button>
            {(localStorage.getItem("loggedInUser") === null ||
              localStorage.getItem("loggedInUser") === "null") === true && (
              <FaUser className="user fs-5" onClick={openModal} />
            )}
            {(localStorage.getItem("loggedInUser") !== null &&
              localStorage.getItem("loggedInUser") !== "null") === true && (
              <Nav.Link
                onClick={() => {
                  localStorage.setItem("loggedInUser", null);
                }}
                href="/home"
              >
                Logout
              </Nav.Link>
            )}
          </Form>
          <Modal show={showModal} onHide={closeModal}>
            <Modal.Body closeButton className="log">
              <Modal.Title className="t1 text-warning">Login</Modal.Title>
              <LoginForm onRegister={handleRegister} />
            </Modal.Body>
          </Modal>

          <Modal show={registerModal} onHide={closeRegisterModal}>
            <Modal.Body closeButton className="log">
              <Modal.Title className="t1 text-warning">
                Registrazione utente
              </Modal.Title>
              <RegisterForm />
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
