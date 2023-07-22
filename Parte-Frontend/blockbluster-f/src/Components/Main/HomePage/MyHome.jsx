import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../../../assets/image/logo.png";

function MyHome() {
  return (
    <div className="home-container">
      <div>
        Benvenuti sulla piattaforma di BlockBluster dove potrete trovare tutti i
        giochi da tavolo che amate di più...
      </div>
      <div className="d-flex mt-5">
        <Image src={logo} className="mt-5" />
      </div>
      <div className="special-effect" />
      <Link to="/games">
        <Button className="special-button" variant="transparent">
          <FaGooglePlay />
        </Button>
      </Link>
    </div>
  );
}

export default MyHome;
