import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
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

    handleRegister(userData);
  };

  const handleRegister = async (userData) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registrazione avvenuta con successo");
      } else if (response.status === 400) {
        throw new Error("L'utente è già registrato");
      } else {
        throw new Error("Errore durante la registrazione");
      }
    } catch (error) {
      console.error("Errore durante la registrazione:", error.message);
      alert(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="t2">
      <Form.Group controlId="formBasicName">
        <Form.Label className="t1  text-dark fs-6">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastname">
        <Form.Label className="mt-4 t1 text-dark fs-6">Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicUsername">
        <Form.Label className="mt-4 t1 text-dark fs-6">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className="mt-4 t1 text-dark fs-6">
          Email address
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="mt-4 t1 text-dark fs-6">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicCreditCard">
        <Form.Label className="mt-4 t1 text-dark fs-6">Credit Card</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter credit card number"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicSecretCode">
        <Form.Label className="mt-4 t1 text-dark fs-6">Secret Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter secret code"
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicAlfaCode">
        <Form.Label className="mt-4 t1 text-dark fs-6">Alfa Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter alfa code"
          value={alfaCode}
          onChange={(e) => setAlfaCode(e.target.value)}
          required
        />
      </Form.Group>

      <Button
        className="mt-3 t1 fs-5 text-light rounded rounded-5 shadow"
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Salva
      </Button>
    </Form>
  );
};

export default RegisterForm;
