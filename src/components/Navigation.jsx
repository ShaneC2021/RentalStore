import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Navigation() {
  return (
    <Container fluid className="nav-height m-0 p-0">
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        className="nav-height"
      >
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/RentalStore">
              <Nav.Link>
                <img
                  src={require("../images/main20.jpg")}
                  width="75"
                  height="75"
                  className="d-inline-block align-top logo img-responsive"
                  alt="camper van with surfboard on the side"
                />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto p-0">
              <LinkContainer to="/RentalStore/About">
                <Nav.Link className="features">About Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/RentalStore/Fleet">
                <Nav.Link>Our Fleet</Nav.Link>
              </LinkContainer>

              <LinkContainer to="RentalStore/Contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default Navigation;
