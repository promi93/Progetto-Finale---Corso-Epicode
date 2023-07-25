import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../../assets/image/logo.png";

function MyHome2() {
  return (
    <Container fluid className="home-container2" style={{ height: "100vh" }}>
      <Col className="d-flex justify-content-center mb-5">
        <Row xxl={12}>
          <Image src={logo} style={{ width: "10em" }} />
          <div className="t1 text-warning">
            Effettua il Login per accedere ai giochi
          </div>
        </Row>
      </Col>
    </Container>
  );
}

export default MyHome2;
