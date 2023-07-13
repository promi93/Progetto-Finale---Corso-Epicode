import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GamePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/games", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore durante il recupero dei giochi");
        }
      })
      .then((data) => setGames(data))
      .catch((error) =>
        console.error("Errore durante il recupero dei giochi:", error)
      );
  }, []);

  return (
    <div className="game-list d-flex flex-wrap justify-content-center mt-5">
      {games.map((game) => (
        <Card key={game.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Img
              src={game.image}
              style={{ width: "100px", height: "100px" }}
            />
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>
              Category: {game.category}
              <br />
              Rental Price: {game.rentalPrice}
              <br />
              Game Price: {game.gamePrice}
              <br />
              Available: {game.isAvailable ? "Yes" : "No"}
            </Card.Text>
            <Button variant="primary">Noleggia</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default GamePage;
