import { React, useState } from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormField from "../components/FormField";
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";
import RentStageOne from "../components/RentStageOne";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

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
      pickUpDate: "",
      dropOffDate: "",
      age: "",
    },
  ];
  

  const [state, setState] = useState(initialState);

  const handleStateChange = (pageId, newState) => {
    const currentState = { ...state };
    currentState[pageId] = newState;
   // dateValidator(newState)?setState(currentState):setState({...newState,pickUpDate: new Date() });
   setState(currentState)
  
  };
  console.log(state);
  

  const handleChangeStage = (pageId) => {
    
    setCurrentPage(pageId);
  };



//

function formatDate() {
  let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

      console.log([year, month, day].join('-'));

  return [year, month, day].join('-');
}
const currentDate = formatDate();

 /* const dateValidator = (stateObject) =>{



    const currentDate = new Date();
    let pickup = new Date(stateObject.pickUpDate);
    let dropoff = new Date(stateObject.dropOffDate);
    console.log(currentDate);
    console.log(pickup.getTime());
    console.log(dropoff.getTime());


    if (pickup.getTime() < currentDate) {
    alert("this date has already passed");
return false;
  
    }
    if (dropoff.getTime() < pickup.getTime()){
    alert("dropoff must occur after pickup ");
    return false
  }
  return true;
  }*/

  const calculateRentalFee = () => {
    const date1 = new Date(state[0].pickUpDate);
    const date2 = new Date(state[0].dropOffDate);
    const timeSpan = date2.getTime() - date1.getTime();
    const timeSpanDays = timeSpan / (1000 * 3600 * 24);
    const rentalCost = timeSpanDays * item.cost;
    setState({
      ...state[0],
      rentalFee: rentalCost,
      rentalDuration: timeSpanDays,
    });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <RentStageOne
            data={state[0]}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
            calculateRentalFee={calculateRentalFee}
           // dateValidator={dateValidator}
            currentDate={currentDate}
          />
        );

        

      case 1:
        return (
          <RentStageTwo
            data={state}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
            van={item}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="main-body">
        <Row className="m-0 p-0">
          <Col xs={12} sm={12} md={4} lg={4}></Col>
          <Col xs={12} sm={12} md={4} lg={4} className="m-0 p-0">
            <div>
              <VehicleCard obj={item} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}></Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}></Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className=" p-1">{renderCurrentPage()}</div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}></Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

// need to have error handling for impossible dates

// need to have next button hidden until all relevant info has been inputted

export default Rent;

