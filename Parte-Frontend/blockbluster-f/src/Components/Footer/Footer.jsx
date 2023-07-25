import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 ">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3} xl={2} xxl={2}>
            <h5 className="t1 text-info fs-2">About Us</h5>
            <p>
              Esplora mondi, sfida amici e crea ricordi indelebili con la nostra
              piattaforma di e-commerce di noleggio giochi da tavolo.
              Divertimento illimitato a portata di clic.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5 className="t1 text-info fs-2">Contatti</h5>
            <p>Email: info_blockgame@email.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5 className="t1 text-info fs-2">Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook size={24} className="me-2 text-light" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram size={24} className="me-2 text-light" />
              </a>
              <a href="https://github.com/promi93" target="_blank">
                <FaGithub size={24} className="me-2 text-light" />
              </a>
              <a href="https://www.linkedin.com/in/promi-abu/" target="_blank">
                <FaLinkedin size={24} className="me-2 text-light" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5 className="t1 text-info fs-2">Subscribe</h5>
            <p>Subscribe to our newsletter to receive updates and offers.</p>
            <div>
              <input type="email" placeholder="Your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
