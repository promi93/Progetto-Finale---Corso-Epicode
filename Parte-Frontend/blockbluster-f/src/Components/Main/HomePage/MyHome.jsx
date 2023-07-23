import { Link } from "react-router-dom";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../../../assets/image/logo.png";

function MyHome() {
  return (
    <Container fluid>
      <Row>
        <div className="home-container">
          <section className="sec">
            <h1 className="block t1">
              <span className="sp">B</span>
              <span className="sp">L</span>
              <span className="sp">O</span>
              <span className="sp">C</span>
              <span className="sp">K</span>
              <span className="sp">B</span>
              <span className="sp">L</span>
              <span className="sp">U</span>
              <span className="sp">S</span>
              <span className="sp">T</span>
              <span className="sp">E</span>
              <span className="sp">R</span>
            </h1>
          </section>
          <div className="d-flex mt-5">
            <Image src={logo} className="mt-5" />
          </div>
          <div className="special-effect" />
          <Link to="/games">
            <Button className="special-button" variant="transparent">
              <FaGooglePlay />
            </Button>
          </Link>
          <div className="click-text t2">
            Scopri i nostri giochi
            <span className="arrow">&nbsp; &#8594;</span>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default MyHome;
