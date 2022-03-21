import React from "react";
import  Form  from "react-bootstrap/Form";
import FormField from "../components/FormField";
import { Row, Button, Col } from "react-bootstrap";

function RentStageOne(props) {


    
  return (
      
    <div>
      
<Form onSubmit={props.onSubmit}>
<Row>
  <Col xs={12} sm={12} lg={3}>
    <Form.Label>Pickup Date: </Form.Label>
  </Col>
  <Col xs={12} sm={12} lg={3}>
    <Form.Control
      type="date"
      name="pickupDate"
      size="sm"
      onChange={(e) => props.handleStateChange(0, {...props.data, pickUpDate: e.target.value})}
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
      onChange={(e) => props.handleStateChange(0, {...props.data, dropOffDate: e.target.value})}
      required
    />
  </Col>
</Row>

<Row>
  <FormField
    field="First Name"
    type="text"
    onChange={(e) => props.handleStateChange(0, {...props.data, firstName: e.target.value})}
    name="firstName"
    required
  />

  <FormField
    field="Last Name"
    type="text"
    onChange={(e) => props.handleStateChange(0, {...props.data, lastName: e.target.value})}
    name="lastName"
  />
</Row>
<Row>
  <FormField
    field="Age"
    type="number"
    onChange={(e) => props.handleStateChange(0, {...props.data, age: e.target.value})}
    min="25"
    name="age"
  />
</Row>
<Row>
  <Col>
    <div className="d-grid gap-2 p-2">
        <Button variant="dark" size="lg" onClick={()=>{props.handleChangeStage(1);props.calculateRentalFee()}}>
          Next
        </Button>
    </div>
  </Col>
</Row>
</Form> 

    </div>
  );
}

export default RentStageOne;
