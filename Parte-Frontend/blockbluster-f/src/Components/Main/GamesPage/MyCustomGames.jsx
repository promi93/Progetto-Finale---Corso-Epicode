import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function MyCustomGames() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    rentalPrice: "",
    gamePrice: "",
    isAvailable: false,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithoutImage = { ...formData };
      if (selectedFile) {
        formDataWithoutImage.image = selectedFile.name;
      }

      const response = await fetch(
        "http://localhost:8080/api/auth/customgames",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithoutImage),
        }
      );
      if (response.ok) {
        console.log("Gioco personalizzato inviato con successo al backend");
        alert("Gioco aggiunto con successo!");
        window.location.replace("/games");
      } else if (response.status === 500) {
        console.log("Gioco già presente!");
      } else {
        throw new Error("Errore durante l'invio del gioco al backend");
      }
    } catch (error) {
      console.error("Errore durante l'invio del gioco al backend:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="t2 mt-5">
          <h1 className="t1 mb-5">Inserisci il tuo gioco da tavolo</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="title">
                  <Form.Label>Titolo</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow mb-5"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="category">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="shadow mb-5"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="rentalPrice">
                  <Form.Label>Prezzo noleggio</Form.Label>
                  <Form.Control
                    type="number"
                    name="rentalPrice"
                    value={formData.rentalPrice}
                    onChange={handleChange}
                    className="shadow mb-5"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="my-4">
                  Carica gioco
                </Button>
              </Col>
              <Col>
                <Form.Group controlId="description">
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="shadow mb-5"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="gamePrice">
                  <Form.Label>Prezzo intero</Form.Label>
                  <Form.Control
                    type="number"
                    name="gamePrice"
                    value={formData.gamePrice}
                    onChange={handleChange}
                    className="shadow mb-5"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>Carica immagine</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="shadow mb-5"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCustomGames;
