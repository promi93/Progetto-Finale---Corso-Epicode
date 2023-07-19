import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../../../assets/image/logo.png";

function MyHome() {
  return (
    <div className="home-container">
      <div className="d-flex">
        <Image src={logo} />
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
