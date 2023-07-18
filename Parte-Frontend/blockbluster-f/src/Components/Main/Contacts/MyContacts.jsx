import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function MyContacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendCopy, setSendCopy] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendCopyChange = (event) => {
    setSendCopy(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col className="d-flex align-items-center justify-content-center back-contact mt-5 p-5">
          <Form
            id="form"
            className="text-center"
            style={{ width: "100%", maxWidth: "300px" }}
            onSubmit={handleSubmit}
          >
            <h2 className="mb-4 c1">Contattaci</h2>

            <Form.Group controlId="name">
              <Form.Label className="c2">Nome e Cognome</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                required
                className="shadow"
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-5">
              <Form.Label className="c2">Indirizzo e-mail *</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="shadow"
              />
            </Form.Group>

            <Form.Group controlId="subject" className="mt-5">
              <Form.Label className="c2">Soggetto</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={handleSubjectChange}
                className="shadow"
              />
            </Form.Group>

            <Form.Group controlId="message" className="mt-5">
              <Form.Label className="c2">Messaggio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={handleMessageChange}
                className="shadow"
              />
            </Form.Group>

            <Button variant="primary" type="submit" block className="my-4">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MyContacts;
