import React from "react";
import { Twitter } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row className="footer m-0">
      <Col xs={12} sm={12} md={4} lg={4}>
        <div >
          <h6>Follow Us On</h6>
          <span className=" d-flex  justify-content-around m-1">
            <Twitter />
            <Facebook />
            <Instagram />
          </span>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h5>Customer Assistance</h5>
          <div className="d-flex flex-column align-items-center">
            <p className="m-0">
              Tel: <a href="tel:123-456-7890">123-456-7890</a>
            </p>

            <p className="m-0">
              Email: <a href="fish_shane@hotmail.com">Paradise Rentals</a>
            </p>

            <p className="m-0">
              Fax: <a href="tel:123-456-7890">123-456-7890</a>
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h5>Resources</h5>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
