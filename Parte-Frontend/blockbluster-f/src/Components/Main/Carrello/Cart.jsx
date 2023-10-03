import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsXCircle } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import check from "../../../assets/image/check.png";

function Cart({
  cart,
  cartTotal2,
  removeFromCart,
  removeAllFromCart,
  onCloseSidebar,
}) {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // stato del pagamento

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) {
      console.log("Stripe non è ancora pronto. Riprova più tardi.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(
        "Errore durante la creazione della PaymentMethod:",
        error.message
      );
    } else {
      console.log("PaymentMethod creato con successo:", paymentMethod);

      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/payment",
          {
            paymentMethodId: paymentMethod.id,
            cartTotal: cartTotal2,
          }
        );

        if (response.status === 200) {
          console.log("pagamento effettuato con successo!");
          alert("Pagamento effettuato con successo!");
          setIsPaymentSuccessful(true); // true se il pagamento va a buon fine!
        }

        console.log("Risposta dal server:", response.data);
      } catch (error) {
        console.error(
          "Errore durante l'invio della PaymentMethod al server:",
          error
        );
      }
    }
  };

  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-between text-dark mt-4">
          <h2 className="t1">Carrello</h2>
          <div onClick={onCloseSidebar} className="close-btn">
            <BsXCircle style={{ cursor: "pointer" }} />
          </div>
        </div>
        <Col>
          {isPaymentSuccessful ? (
            <div className="mt-5 ms-4">
              <Image src={check} style={{ width: "10vh" }} />
              <p className="t2 mt-3">Pagamento effettuato con successo!</p>
            </div>
          ) : (
            <>
              <div className="d-flex flex-wrap justify-content-center mt-5">
                {cart.length === 0 ? (
                  <p className="t2">Il tuo carrello è vuoto.</p>
                ) : (
                  cart.map((game) => (
                    <div className="cart-card" key={game.id}>
                      <Card.Body className="d-flex ">
                        <div>
                          <Card.Title className="t1 fs-6">
                            {game.title}
                          </Card.Title>
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
                  ))
                )}
              </div>
              <Col>
                <p className="t2 ">Totale: {cartTotal2}€</p>
                <CardElement className="CardElement" />
                <Button
                  className="rounded rounded-5 shadow t2 bg-warning mt-3"
                  onClick={handlePayment}
                >
                  Checkout
                </Button>
                <Button
                  className="ms-4 rounded rounded-5 shadow t2 mt-3"
                  variant="danger"
                  onClick={() => removeAllFromCart()}
                >
                  Rimuovi tutto
                </Button>{" "}
              </Col>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
