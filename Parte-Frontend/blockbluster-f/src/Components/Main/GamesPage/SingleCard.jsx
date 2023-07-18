import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleCard() {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/auth/games/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore durante il recupero del gioco");
        }
      })
      .then((data) => setGameData(data))
      .catch((error) =>
        console.error("Errore durante il recupero del gioco:", error)
      );
  }, [id]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center mt-5">
      <Card id="card2">
        <div className="d-flex">
          <Card.Img src={gameData.image} style={{ height: "200px" }} />
          <Card.Body className="ms-5">
            <Card.Title className="t1">{gameData.title}</Card.Title>
            <Card.Text className="t2">
              <span className="category text-danger">Categoria:</span>
              <p> {gameData.category} </p>
              <span className="description text-danger">Info:</span>
              <p> {gameData.description} </p>
              <span className="rental-price text-danger">Prezzo noleggio:</span>
              <p> {gameData.rentalPrice}€ </p>
              <span className="game-price text-danger">Prezzo intero:</span>
              <p> {gameData.gamePrice}€ </p>
              <span className="availability text-info">Disponibilità:</span>
              <p> {gameData.isAvailable ? "Yes" : "No"} </p>
            </Card.Text>
            <Button className="nolo-btn" variant="transparent">
              Noleggia
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default SingleCard;
