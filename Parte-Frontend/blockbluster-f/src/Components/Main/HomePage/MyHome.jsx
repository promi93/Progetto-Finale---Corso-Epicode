import { Link } from "react-router-dom";
import { Button, Container, Image, Row } from "react-bootstrap";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../../../assets/image/logo.png";
import MyHome2 from "./MyHome2";

function MyHome() {
  return (
    <Container fluid>
      {((localStorage.getItem("loggedInUser") !== null &&
        localStorage.getItem("loggedInUser") !== "null") === true && (
        <Row>
          <div className="home-container">
            <section className="sec">
              <h1 className="block">
                <span className="sp">B</span>
                <span className="sp">O</span>
                <span className="sp">A</span>
                <span className="sp">R</span>
                <span className="sp">D</span>
                <span className="sp">I</span>
                <span className="sp">N</span>
                <span className="sp">G</span>
                <span className="sp">P</span>
                <span className="sp">L</span>
                <span className="sp">A</span>
                <span className="sp">Y</span>
              </h1>
            </section>
            <Image src={logo} style={{ width: "10em" }} />
            <section className="mt-5">
              <div className="special-effect" />
              <Link to="/games">
                <Button className="special-button" variant="transparent">
                  <FaGooglePlay />
                </Button>
              </Link>
              <div className="t2 text-light">Scopri i nostri giochi</div>
            </section>
          </div>
        </Row>
      )) || <MyHome2 />}
    </Container>
  );
}

export default MyHome;
