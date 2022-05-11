import React from "react";
import Footer from "../components/Footer";
import { LinkContainer } from "react-router-bootstrap";
import {Row, Col} from "react-bootstrap";

function Home() {
  return (
    <>
    
      <div className="background-logo text-center">
      <Row className="m-0"><Col xs={12} sm={12} md={6} lg={6}>
        <div className="p-1 attention-grabber"> 
        <p>Welcome to Explore Rentals </p>
        
              <LinkContainer to="/RentalStore/Fleet">
              <button className="sparkle-button">Book Your Vehicle Now</button>
                
              </LinkContainer>
              </div>
      </Col></Row></div>
      <Footer />
      
    </>
  );
}

export default Home;
