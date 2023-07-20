import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 ">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3} xl={2} xxl={2}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              gravida nunc sed ex eleifend, non mattis odio rutrum.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com">
                <FaFacebook size={24} className="me-2 text-light" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram size={24} className="me-2 text-light" />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter size={24} className="me-2 text-light" />
              </a>
              <a href="https://www.tiktok.com">
                <FaTiktok size={24} className="me-2 text-light" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Subscribe</h5>
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
