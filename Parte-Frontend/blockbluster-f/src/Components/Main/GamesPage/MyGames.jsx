import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { BsCart4, BsInfoCircleFill } from "react-icons/bs";

function MyGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei giochi:", error);
        setLoading(false);
      });
  }, []);

  if (games.length === 0) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status" className="text-secondary">
          <span className="sr-only"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-center mt-5">
      {games.map((game) => (
        <Card className="card" key={game.id}>
          <Link to={`/games/${game.id}`} className="card-link">
            <Card.Img src={game.image} style={{ height: "200px" }} />
          </Link>
          <Card.Body>
            <Card.Title className="t1">{game.title}</Card.Title>
            <Card.Text className="t2">
              <span className="category">Categoria: {game.category}</span>
              <span className="rental-price">
                Prezzo noleggio: {game.rentalPrice}€
              </span>
              <span className="game-price">
                Prezzo intero: {game.gamePrice}€
              </span>
              <span className="availability">
                Disponibilità: {game.isAvailable ? "Yes" : "No"}
              </span>
            </Card.Text>
            <Button className="nolo-btn" variant="transparent">
              <BsCart4 />
            </Button>
            <Link to={`/games/${game.id}`} className="card-link">
              <Button className="info-btn ms-5" variant="transparent">
                <BsInfoCircleFill />
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MyGames;
