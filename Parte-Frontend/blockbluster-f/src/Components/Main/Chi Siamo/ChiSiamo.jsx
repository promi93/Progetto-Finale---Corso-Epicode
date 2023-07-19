import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

function ChiSiamo() {
  return (
    <Container>
      <Image
        src="/src/assets/image/bl.png"
        alt="BlockBluster"
        style={{ height: "200px" }}
      />
      <div>
        <h1>Benvenuti a BlockBluster</h1>
        <p>
          Siamo una piattaforma online specializzata nel noleggio di giochi da
          tavolo di alta qualità. Con BlockBluster, puoi goderti una vasta
          selezione di giochi da tavolo per tutte le età e i gusti.
        </p>
        <p>
          Offriamo un'esperienza di gioco unica, permettendoti di noleggiare i
          giochi per un periodo di tempo determinato o di acquistarli
          direttamente. La nostra vasta collezione include giochi per famiglie,
          giochi di strategia, giochi di carte e molto altro ancora.
        </p>
        <p>
          Siamo appassionati di giochi da tavolo e ci impegniamo a offrire un
          servizio eccellente ai nostri clienti. Con BlockBluster, puoi scoprire
          nuovi giochi, organizzare serate di gioco divertenti con amici e
          familiari, e avere accesso a titoli esclusivi e introvabili altrove.
        </p>
        <Button variant="primary">Scopri i nostri giochi</Button>
      </div>
    </Container>
  );
}

export default ChiSiamo;
