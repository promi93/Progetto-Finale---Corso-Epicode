import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../../../assets/image/logo.png";

function MyHome() {
  return (
    <div className="home-container">
      <div className="text-cont">
        <div className="text t1">
          Benvenuti sulla piattaforma di BlockBluster
        </div>
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
