import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCustomGames() {
  const [customGames, setCustomGames] = useState([]);

  useEffect(() => {
    fetchCustomGames();
  }, []);

  const fetchCustomGames = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/customgames"
      );
      if (response.ok) {
        const data = await response.json();
        setCustomGames(data);
      } else {
        throw new Error("Errore durante il recupero dei giochi personalizzati");
      }
    } catch (error) {
      console.error(
        "Errore durante il recupero dei giochi personalizzati:",
        error
      );
    }
  };

  return (
    <div>
      {customGames.map((customGame) => (
        <Card key={customGame.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>{customGame.title}</Card.Title>
            <Card.Text>
              Category: {customGame.category}
              <br />
              Rental Price: {customGame.rentalPrice}
              <br />
              Game Price: {customGame.gamePrice}
              <br />
              Available: {customGame.isAvailable ? "Yes" : "No"}
            </Card.Text>
            <Button variant="primary">Noleggia</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MyCustomGames;
