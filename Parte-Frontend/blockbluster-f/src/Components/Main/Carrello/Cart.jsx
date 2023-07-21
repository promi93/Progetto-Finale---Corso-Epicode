import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart({ cart, cartTotal, removeFromCart }) {
  return (
    <Container>
      <Row>
        <h2>Carrello</h2>
        <Col>
          {cart.length === 0 ? (
            <p>Il tuo carrello è vuoto.</p>
          ) : (
            <div className="d-flex flex-wrap justify-content-center mt-5">
              {cart.map((game) => (
                <Card className="card" key={game.id}>
                  <Card.Img src={game.image} style={{ width: "100px" }} />
                  <Card.Body>
                    <Card.Title className="t1 fs-6">{game.title}</Card.Title>
                    <Card.Text className="t2">
                      <span className="category">
                        Categoria: {game.category}
                      </span>
                      <span className="rental-price">
                        Prezzo noleggio: {game.rentalPrice}€
                      </span>
                    </Card.Text>
                    <Button
                      className="bg-danger rounded rounded-5 shadow"
                      variant="danger"
                      onClick={() => removeFromCart(game)}
                    >
                      Rimuovi
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
          <Col className="py-3 px-4 mx-5 rounded rounded-5 shadow">
            <p>Totale: {cartTotal}€</p>
            <Button variant="primary">Checkout</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
