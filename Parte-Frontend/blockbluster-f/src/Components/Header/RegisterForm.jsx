import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [alfaCode, setAlfaCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      lastname,
      username,
      email,
      password,
      creditCard,
      secretCode,
      alfaCode,
      roles: [],
    };
    onRegister(userData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCreditCard">
        <Form.Label>Credit Card</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter credit card number"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicSecretCode">
        <Form.Label>Secret Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter secret code"
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAlfaCode">
        <Form.Label>Alfa Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter alfa code"
          value={alfaCode}
          onChange={(e) => setAlfaCode(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Salva
      </Button>
    </Form>
  );
};

export default RegisterForm;
