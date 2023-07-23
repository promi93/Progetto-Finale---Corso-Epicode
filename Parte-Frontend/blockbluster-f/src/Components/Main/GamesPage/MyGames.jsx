import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { BsCart4, BsInfoCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { SearchContext } from "./SearchProvider";
import Dropdown from "react-bootstrap/Dropdown";
import Cart from "../Carrello/Cart";
import { Container } from "react-bootstrap";

function TruncatedCardTitle({ title, maxLength }) {
  if (title.length <= maxLength) {
    return <Card.Title className="t1">{title}</Card.Title>;
  } else {
    return (
      <Card.Title className="t1">
        {title.slice(0, maxLength) + "..."}
      </Card.Title>
    );
  }
}

function MyGames() {
  const { searchTitle } = useContext(SearchContext);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const gamesPerPage = 10;

  const addToCart = (game) => {
    setCart((prevCart) => [...prevCart, game]);
    setShowAlert(true);
  };

  const removeFromCart = (game) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== game.id));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const calculateCartTotal = () => {
    const total = cart.reduce((acc, game) => acc + game.rentalPrice, 0);
    setCartTotal(total);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    calculateCartTotal();
    if (cart.length > 0) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [cart]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Errore durante il recupero dei giochi");
        }

        return response.json();
      } catch (error) {
        console.error("Errore durante il recupero dei giochi:", error);
        throw error;
      }
    }

    async function fetchGamesData() {
      setLoading(true);
      try {
        const [gamesData, customGamesData] = await Promise.all([
          fetchData("http://localhost:8080/api/auth/games"),
          fetchData("http://localhost:8080/api/auth/customgames"),
        ]);

        setGames([...gamesData, ...customGamesData]);
        setLoading(false);
      } catch (error) {
        console.error("Errore durante il recupero dei giochi:", error);
        setLoading(false);
      }
    }
    fetchGamesData();
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

  const maxLength = 8;
  return (
    <Container fluid>
      <div className="d-flex justify-content-between">
        <Dropdown className="ms-4 mt-2">
          <Dropdown.Toggle variant="transparent" className="drop">
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
      {showAlert && (
        <div
          className={`alert-container alert-success alert-show`}
          role="alert"
        >
          <p className="alert-message">Gioco aggiunto al carrello!</p>
        </div>
      )}
      <div className="d-flex flex-wrap justify-content-center mt-5">
        {currentGames.map((game) => (
          <Card className="card" key={game.id}>
            <Link to={`/games/${game.id}`} className="card-link">
              <Card.Img src={game.image} style={{ height: "150px" }} />
            </Link>
            <Card.Body>
              <TruncatedCardTitle title={game.title} maxLength={maxLength} />{" "}
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
              <Button
                className="nolo-btn"
                variant="transparent"
                onClick={() => addToCart(game)}
              >
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
                className="pagination-link rounded rounded-4 m-2"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isSidebarOpen && (
        <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <Cart
            cart={cart}
            cartTotal={cartTotal}
            removeFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
            onCloseSidebar={handleCloseSidebar}
          />
        </div>
      )}{" "}
    </Container>
  );
}

export default MyGames;
