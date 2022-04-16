import React from "react";
import Form from "react-bootstrap/Form";
import FormField from "../components/FormField";
import { Row, Button, Col } from "react-bootstrap";

function RentStageOne(props) {
  return (
    <div className="bg-light p-2">
      <Form onSubmit={props.onSubmit}> 
        <Row>
          <Col xs={12} sm={12} lg={6}>
            <Form.Label>Pickup Date: </Form.Label>
          </Col>
          <Col xs={12} sm={12} lg={6}>
            <Form.Control
              type="date"
              name="pickUpDate"
              size="sm"
              min={props.currentDate}
              onChange={props.handleStateChange}
              required
            />
          </Col>

          <Col xs={12} sm={12} lg={6}>
            <Form.Label>Drop Off Date: </Form.Label>
          </Col>
          <Col xs={12} sm={12} lg={6}>
            <Form.Control
              type="date"
              name="dropOffDate"
              size="sm"
              min={props.data.pickUpDate}   // stops user selecting a dropoff date prior to pickup date
              onChange={props.handleStateChange}
              required
            />
          </Col>
        </Row>

        <Row>
          <FormField
            field="First Name"
            type="text"
            onChange={props.handleStateChange}
            name="firstName"
            value={props.data.firstName}
            required
          />

          <FormField
            field="Last Name"
            type="text"
            onChange={props.handleStateChange}
            name="lastName"
            value={props.data.lastName}
            required
          />
        </Row>
        <Row>
          <FormField
            field="Age"
            type="number"
            onChange={props.handleStateChange}
            min="25"
            name="age"
            required
          />
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2 p-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                
                
                
              >
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
