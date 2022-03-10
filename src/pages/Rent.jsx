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
  const [stepTwo, setStepTwo] = useState(false); //defines what step we are at in the rental from submission

  const initialValues = {
    firstName: "",
    lastName: "",
    pickupDate: "",
    dropOffDate: "",
    age: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values);

  const handleClick = () => {
    setStepTwo(true);
  };

  // need to have error handling for impossible dates
  // need to caculate number of days being rented based on user input
  // need to have next button hidden until all relevant info has been inputted

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
            <div className=" p-2 ">
              {stepTwo ? (
                <RentStageTwo {...values} />
              ) : (
                <RentStageOne
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onClick={handleClick}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Rent;
