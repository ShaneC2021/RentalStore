import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";
import RentStageOne from "../components/RentStageOne";
import { useLocation } from "react-router-dom";
import {useEffect } from "react";
import RentStageTwo from "../components/RentStageTwo";






function Rent() {
  const location = useLocation();
  const item = location.state.vcard.vehicle;
  const vehicleId = item.vehicle;

  
  

  // sets page to component to be displayed
  const [currentPage, setCurrentPage] = useState(0);
 
  // object contains customer details
  const initialState = 
    {
      firstName: "",
      lastName: "",
      pickUpDate: "",
      dropOffDate: "",
      age: ""
    }

  const [state, setState] = useState(initialState);

//
  
function getStorageValue(key, defaultValue) {

  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  console.log(initial);
  return initial || defaultValue;
  

}
getStorageValue(vehicleId,"nothingto see here");

  // stores rental dates on local storage to assist with preventing double bookings

 useEffect(()=>{
   localStorage.setItem(vehicleId,JSON.stringify([state.pickUpDate,state.dropOffDate]))
  },[state.pickUpDate,state.dropOffDate]);
 
  //

  const handleStateChange = e => {
    const{ name, value} = e.target;

    setState(prevState =>({
      ...prevState, 
      [name]:value}));
  };

  const handleChangeStage = (pageId) => {
    setCurrentPage(pageId);
  };

  //new
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeStage(1);
    calculateRentalFee();
  }

  function formatDate() {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const currentDate = formatDate();

  const calculateRentalFee = () => {
    const date1 = new Date(state.pickUpDate);
    const date2 = new Date(state.dropOffDate);
    const timeSpan = date2.getTime() - date1.getTime();
    let timeSpanDays = timeSpan / (1000 * 3600 * 24);
    let rentalCost = null;


    if (timeSpan === 0) {
      rentalCost = item.cost;
      timeSpanDays = 1;
    } else rentalCost = timeSpanDays * item.cost;

    setState({
      ...state,
      rentalFee: rentalCost,
      rentalDuration: timeSpanDays,
    });
  };






  
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <RentStageOne
            onSubmit={handleSubmit}
            data={state}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
            calculateRentalFee={calculateRentalFee}
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
            currentDate={currentDate}
            
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="main-body body-color d-flex flex-column justify-content-center">
        <div>
        <Row className="m-0 p-0">
          <Col xs={12} sm={12} md={4} lg={4}></Col>
          <Col xs={12} sm={12} md={4} lg={4} className="m-0 p-0">
            <div className="p-4">
              <VehicleCard obj={item} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} sm={12} md={4} lg={4} ></Col>
          <Col xs={12} sm={12} md={4} lg={4} className="p-4" >
            <div>{renderCurrentPage()}</div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}></Col>
        </Row></div>
        
      </div>

      <Footer />
    </>
  );
}



export default Rent;
