import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { BsCart4, BsInfoCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { SearchContext } from "./SearchProvider";
import Dropdown from "react-bootstrap/Dropdown";

function MyGames() {
  const { searchTitle } = useContext(SearchContext);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const gamesPerPage = 10;

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

  useEffect(() => {
    const filtered = games
      .filter(
        (game) =>
          (!selectedCategory || game.category === selectedCategory) &&
          (!searchTitle ||
            game.title.toLowerCase().includes(searchTitle.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === "asc") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "desc") {
          return b.title.localeCompare(a.title);
        } else {
          return 0;
        }
      });

    setFilteredGames(filtered);
  }, [games, selectedCategory, searchTitle, sortBy]);

  const categories = [
    "FAMILY",
    "PARTY",
    "STRATEGY",
    "CARD",
    "ROLE_PLAY",
    "CLASSIC",
    "WORD",
  ];

  const sortOptions = [
    { value: "", label: "Nessun ordinamento" },
    { value: "asc", label: "A-Z" },
    { value: "desc", label: "Z-A" },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status" className="text-secondary">
          <span className="sr-only"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Dropdown className="ms-4 mt-2">
          <Dropdown.Toggle variant="trasparent" className="drop">
            <BsThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu className="carica">
            <Dropdown.Item href="/customgames">Carica un gioco</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="filters">
          <Form.Select
            className="category-filter filtri"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Tutte le categorie</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="sort-filter filtri"
            value={sortBy}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center mt-5">
        {currentGames.map((game) => (
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

      <div className="pagination">
        <ul className="pagination-list">
          {Array.from({
            length: Math.ceil(filteredGames.length / gamesPerPage),
          }).map((_, index) => (
            <li
              key={index}
              className={`pagination-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="pagination-link"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyGames;
