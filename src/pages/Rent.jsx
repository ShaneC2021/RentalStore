import { React, useState } from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import  Form  from "react-bootstrap/Form";
import FormField from "../components/FormField";
import { useLocation, Link } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";

function Rent() {
  const location = useLocation();
  let item = location.state.vcard.vehicle;

  const initialValues = {
    firstName: "",
    lastName: "",
    pickupDate:"",
    dropOffDate: "",
    age:"",
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

   // need to have error handling for impossible dates
   // need to caculate number of days being rented based on user input
   // need to have next button hidden untill all relevant info has been inputted

  return (<>
    <div className="main-body">
      <Row className="m-0 p-0">
        <Col xs={12} sm={12} md={3} lg={3} className="m-0 p-0">
          <div>
            <VehicleCard obj={item} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={9} lg={9} className="m-0 p-0">
          <div className=" p-2 ">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={12} lg={3}>
                  <Form.Label>Pickup Date: </Form.Label>
                </Col>
                <Col xs={12} sm={12} lg={3}>
                  <Form.Control
                    type="date"
                    name="pickupDate"
                    size="sm"
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col xs={12} sm={12} lg={3}>
                  <Form.Label>Drop Off Date: </Form.Label>
                </Col>
                <Col xs={12} sm={12} lg={3}>
                  <Form.Control
                    type="date"
                    name="dropOffDate"
                    size="sm"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <FormField
                  field="First Name"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  required
                />

                <FormField
                  field="Last Name"
                  type="text"
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                />
              </Row>

              <Row>
                <FormField
                  field="Age"
                  type="number"
                  onChange={handleChange}
                  value={values.age}
                  min="25"
                  name="age"
                  
                />
              </Row>
              <Row>
                <Col>
                  <div className="d-grid gap-2 p-2">
                    <Link to ="/RentPagetwo" state= {{customer: {values} }}>
                    <Button variant="dark" size="md" >
                      Next
                    </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
    <Footer /></>
  );
}

export default Rent;

