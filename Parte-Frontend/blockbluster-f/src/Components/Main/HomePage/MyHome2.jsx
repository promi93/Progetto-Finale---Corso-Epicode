import { Container, Image, Row } from "react-bootstrap";
import logo from "../../../assets/image/logo.png";

function MyHome2() {
  return (
    <div className="home-container2" style={{ height: "100vh" }}>
      <Container fluid className="d-flex justify-content-center mb-5">
        <Row xxl={12}>
          <Image src={logo} style={{ width: "10em" }} />
          <div className="t1 text-warning">
            Effettua il Login per accedere ai giochi
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MyHome2;
