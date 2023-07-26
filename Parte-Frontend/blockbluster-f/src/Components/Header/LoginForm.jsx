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
        localStorage.setItem("loggedInUser", data.username);
        setIsLoggedIn(true);
        alert("Accesso effettuato con successo");
        window.location.replace("/home");
      } else if (response.status === 401) {
        setError("Utente non registrato");
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
    <Form onSubmit={handleLogin} className="t2">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="username">
        <Form.Label className="t1 fs-6">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label className="t1 fs-6 mt-4">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div className="mt-3 d-flex justify-content-between">
        <Button
          className="mt-3 t1 fs-5 text-light rounded rounded-5 shadow"
          variant="primary"
          type="submit"
          onClick={handleLogin}
        >
          Accedi
        </Button>
        <Button
          className="mt-3 t1 fs-5 text-light rounded rounded-5 shadow"
          variant="success"
          onClick={onRegister}
        >
          Registrati
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
