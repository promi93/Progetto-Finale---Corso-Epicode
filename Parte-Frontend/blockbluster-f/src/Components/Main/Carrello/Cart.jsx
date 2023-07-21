import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsXCircle } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

function Cart({
  cart,
  cartTotal,
  removeFromCart,
  removeAllFromCart,
  onCloseSidebar,
}) {
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-between text-dark">
          <h2 className="t1">Carrello</h2>
          <div onClick={onCloseSidebar} className="close-btn">
            <BsXCircle style={{ cursor: "pointer" }} />
          </div>
        </div>
        <Col>
          {cart.length === 0 ? (
            <p className="t2">Il tuo carrello è vuoto.</p>
          ) : (
            <div className="d-flex flex-wrap justify-content-center mt-5">
              {cart.map((game) => (
                <div className="cart-card" key={game.id}>
                  <Card.Body className="d-flex ">
                    <div>
                      <Card.Title className="t1 fs-6">{game.title}</Card.Title>
                      <Card.Text className="t2">
                        <span className="rental-cart">
                          Prezzo noleggio: {game.rentalPrice}€
                        </span>
                      </Card.Text>
                    </div>
                    <div
                      className="text-danger ms-4"
                      variant="danger"
                      onClick={() => removeFromCart(game)}
                    >
                      <MdDeleteForever style={{ cursor: "pointer" }} />
                    </div>
                  </Card.Body>
                </div>
              ))}
            </div>
          )}
          <Col>
            <p className="t2 ">Totale: {cartTotal}€</p>
            <Button className="rounded rounded-5 shadow t2" variant="warning">
              Checkout
            </Button>
            <Button
              className="ms-4 rounded rounded-5 shadow t2"
              variant="danger"
              onClick={() => removeAllFromCart()}
            >
              Rimuovi tutto
            </Button>{" "}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
