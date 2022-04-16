import React from "react";
import { Twitter } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row className="footer m-0 pt-3">
      <Col xs={12} sm={12} md={4} lg={4}>
        <div >
          <h6><b>Follow Us On</b></h6>
          <span className=" d-flex flex-column align-items-center justify-content-around m-1">
            <Twitter className="m-1"/>
            <Facebook className="m-1"/>
            <Instagram className="m-1"/>
          </span>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h6><b>Customer Assistance</b></h6>
          <div className="d-flex flex-column align-items-center">
            <p className="m-1">
              Tel: <a href="tel:123-456-7890">123-456-7890</a>
            </p>

            <p className="m-1">
              Email: <a href="mailto:fish_shane@hotmail.com">Explore Rentals</a>
            </p>

            <p className="m-1">
              Fax: <a href="tel:123-456-7890">123-456-7890</a>
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h6><b>Resources</b></h6>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
