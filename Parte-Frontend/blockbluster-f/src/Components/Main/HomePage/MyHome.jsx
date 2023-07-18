import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function MyHome() {
  const [animate, setAnimate] = useState(false);
  const [specialEffect, setSpecialEffect] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setSpecialEffect(true);

    setTimeout(() => {
      setAnimate(false);
      setSpecialEffect(false);
    }, 1000);
  };

  return (
    <div className="home-container">
      <div className={`special-effect ${specialEffect ? "active" : ""}`} />
      <Link to="/mygames">
        <Button
          className={`special-button ${animate ? "animate" : ""}`}
          variant="transparent"
          onClick={handleClick}
        >
          Inizia
        </Button>
      </Link>
    </div>
  );
}

export default MyHome;
