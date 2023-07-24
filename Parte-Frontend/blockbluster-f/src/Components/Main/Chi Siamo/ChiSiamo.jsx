import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png";

function ChiSiamo() {
  return (
    <div className="chi">
      <Row className="d-flex justify-content-center mt-2">
        <Image src={logo} className="logo my-4" />
      </Row>
      <Row className="d-flex justify-content-center t1 text-dark">
        Chi siamo
      </Row>
      <Container className="my-5 py-5 shadow rounded rounded-4">
        <Row>
          <Col xs={12} md={6}>
            <Image
              src={
                "https://cdn.thewirecutter.com/wp-content/uploads/2018/03/boardgamesforadults-lowres-7452.jpg?auto=webp&quality=75&crop=3:2&width=1024"
              }
              fluid
              className="pic-size"
            />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="t1">Benvenuti a BoardingPlay</h1>
            <p className="t2">
              Benvenuti su BoardingPlay, la piattaforma online specializzata nel
              noleggio di giochi da tavolo di alta qualità. Siamo un'azienda di
              e-commerce che offre un servizio conveniente e accessibile per
              noleggiare giochi da tavolo e goderne comodamente a casa tua.
              Grazie alla nostra vasta selezione di giochi, puoi trovare quello
              più adatto alle tue preferenze e divertirti con amici e familiari.
              Crediamo che i giochi da tavolo siano un'ottima forma di
              intrattenimento che unisce le persone e crea momenti di
              divertimento e condivisione. La nostra passione per i giochi da
              tavolo ci spinge a fornire un servizio eccellente ai nostri
              clienti, consigliando i giochi più adatti alle loro preferenze e
              garantendo che i giochi noleggiati arrivino rapidamente e in
              perfette condizioni direttamente a casa loro.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6} className="order-md-2">
            <Image
              src={
                "https://vrscout.com/wp-content/uploads/2019/10/Monster3people.Still002-e1571957357850.png"
              }
              fluid
              className="pic-size"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="t1">Cosa offriamo</h2>
            <p className="t2">
              La nostra piattaforma è stata progettata per offrire un'esperienza
              di noleggio semplice e conveniente. Puoi esplorare la nostra
              collezione online, composta da una vasta gamma di giochi per
              famiglie, giochi di strategia, giochi di carte e molto altro
              ancora. Siamo costantemente aggiornati sulle ultime novità del
              settore e ti offriamo sia i classici intramontabili che le ultime
              uscite. Per garantire un'esperienza di noleggio senza problemi,
              abbiamo una rete di distribuzione che copre tutto il territorio
              europeo. Siamo in grado di consegnare i giochi in modo tempestivo
              e affidabile ovunque tu sia. Inoltre, il nostro servizio di
              assistenza clienti è sempre disponibile per rispondere alle tue
              domande, fornire supporto e assistenza durante il processo di
              noleggio.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <Image
              src={
                "https://media.istockphoto.com/id/1061624372/photo/friends-living-together.jpg?s=612x612&w=0&k=20&c=Lm-Q6JIE-2ahN9v7KN6iBnch0aS2ae_N8BgCgdf9FKw="
              }
              fluid
              className="pic-size"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="t1">La nostra passione</h2>
            <p className="t2">
              Siamo costantemente impegnati a crescere e migliorare la nostra
              offerta per venire incontro alle esigenze di tutti i nostri
              clienti, di tutte le età e con diverse preferenze di gioco. La
              nostra missione è rendere i giochi da tavolo accessibili a tutti,
              promuovendo il divertimento, la socializzazione e la creatività.
            </p>
          </Col>
        </Row>
        <Link to="/games">
          <Button className="mt-4 offset-8" variant="primary">
            Scopri i nostri giochi
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default ChiSiamo;
