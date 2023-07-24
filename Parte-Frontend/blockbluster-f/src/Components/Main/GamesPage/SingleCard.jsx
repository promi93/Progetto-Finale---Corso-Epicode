import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

function SingleCard() {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem(`rating-${id}`);
    return savedRating ? parseInt(savedRating, 10) : 0;
  });

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

  useEffect(() => {
    localStorage.setItem(`rating-${id}`, rating.toString());
  }, [id, rating]);

  const handleRating = (value) => {
    setRating(value);
  };

  if (!gameData) {
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
      <Card id="card2">
        <div className="d-flex">
          <Card.Img src={gameData.image} style={{ height: "200px" }} />
          <Card.Body className="ms-5">
            <Card.Title className="t1">{gameData.title}</Card.Title>
            <Card.Text className="t2">
              <div>
                <span className="category text-danger">Categoria:</span>{" "}
                {gameData.category}
              </div>
              <div>
                <span className="description text-danger">Info:</span>{" "}
                {gameData.description}
              </div>
              <div>
                <span className="rental-price text-danger">
                  Prezzo noleggio:
                </span>{" "}
                {gameData.rentalPrice}€
              </div>
              <div>
                <span className="game-price text-danger">Prezzo intero:</span>{" "}
                {gameData.gamePrice}€
              </div>
              <div>
                <span className="availability text-info">Disponibilità:</span>{" "}
                {gameData.isAvailable ? "Yes" : "No"}
              </div>
              <div>
                <span className="rating text-info">Valutazione:</span>
                <div className="stella">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <svg
                      key={value}
                      onClick={() => handleRating(value)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={value <= rating ? "gold" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.32 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.32 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
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
