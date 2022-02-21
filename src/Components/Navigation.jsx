import React from "react";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <Container fluid className="nav-height m-0 p-0">
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="nav-height">
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/"><Nav.Link>
            <img
              src={require("../images/campervan.jpg")}
              width="75"
              height="75"
              className="d-inline-block align-top logo img-responsive"
            />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto p-0">
            <LinkContainer to="/About"><Nav.Link className="features">About</Nav.Link></LinkContainer>
            <Nav.Link className="pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item>Rent A Van</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to="/Fleet"><Nav.Link>Our Fleet</Nav.Link></LinkContainer>
            
              <LinkContainer to="/Contact"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}
export default Navigation;
