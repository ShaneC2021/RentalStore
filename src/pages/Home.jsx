import React from "react";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  return (
    <>
      <div className="background-logo text-center"><p>Welcome to Explore Rentals where your first step to adventure begins.</p>
        
              <LinkContainer to="/RentalStore/Fleet">
              <Button variant="secondary" size="sm">Click here to proceed</Button>
                
              </LinkContainer>
      </div>
      <Footer />
      
    </>
  );
}

export default Home;
