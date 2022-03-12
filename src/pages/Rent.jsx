import { React, useState } from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormField from "../components/FormField";
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";
import RentStageOne from "../components/RentStageOne";

import { useLocation, Link } from "react-router-dom";
import RentStageTwo from "../components/RentStageTwo";

function Rent() {
  const location = useLocation();
  const item = location.state.vcard.vehicle;

  const [currentPage, setCurrentPage] = useState(0);
  const initialState = [
    {
      firstName: "",
      lastName: "",
      pickupDate: "",
      dropOffDate: "",
      age: "",
    },
    {
      firstName: "",
      lastName: "",
      age: "",
      rentalDuration: "",
      cost: "",
    },
  ];

  const [state, setState] = useState(initialState);

  const handleStateChange = (pageId, newState) => {
    
    const currentState = { ...state };
    currentState[pageId] = newState;
    setState(currentState);
  
  };

  const handleChangeStage = (pageId) => {
    setCurrentPage(pageId);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <RentStageOne
            data={state[0]}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
          />
        );
        break;
      case 1:
        return (
          <RentStageTwo
            data={state[0]}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
          />
        );
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="main-body">
        <Row className="m-0 p-0">
          <Col xs={12} sm={12} md={3} lg={3} className="m-0 p-0">
            <div>
              <VehicleCard obj={item} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className="m-0 p-0">
            <div className=" p-2 ">{renderCurrentPage()}</div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

// need to have error handling for impossible dates
// need to caculate number of days being rented based on user input
// need to have next button hidden until all relevant info has been inputted

export default Rent;
