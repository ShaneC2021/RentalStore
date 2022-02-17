import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

   


function Navigation() {
  return (
    
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="#home">
        <img src={require('../images/campervan.jpg')}   width="75" height="75"
        className="d-inline-block align-top logo img-responsive" /></Navbar.Brand>
   
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav className="ms-auto p-0">
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Rent A Van</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Our Fleet</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
 export default Navigation