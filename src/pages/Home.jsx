import React from "react";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  return (
    <>
      <div className="background-logo text-center d-flex align-items-start justify-content-center">
        <div className="p-1 attention-grabber"> 
        <p>Welcome to Explore Rentals where your first step to adventure begins.</p>
        
              <LinkContainer to="/RentalStore/Fleet">
              <Button className="sparkle-button" variant="outline-*" >Click Here To Proceed</Button>
                
              </LinkContainer>
              </div>
      </div>
      <Footer />
      
    </>
  );
}

export default Home;
