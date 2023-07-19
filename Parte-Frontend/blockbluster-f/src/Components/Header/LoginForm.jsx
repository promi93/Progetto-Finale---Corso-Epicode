import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const LoginForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Accesso effettuato con successo:", data);
        // Salva l'utente registrato su localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));
        setIsLoggedIn(true);
        alert("Accesso effettuato con successo");
      } else if (response.status === 401) {
        setError("Utente non registrato");
      } else if (response.status === 400) {
        setError("Utente già connesso");
      } else {
        const errorData = await response.json();
        setError("Errore durante l'accesso: " + errorData.message);
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
      setError("Errore di rete. Riprova più tardi.");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Accedi
      </Button>
      <Button variant="link" onClick={onRegister}>
        Registrati
      </Button>
    </Form>
  );
};

export default LoginForm;
