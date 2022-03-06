import { React, useState } from "react";
import { Card, Form, Row, Button, Col } from "react-bootstrap";
import FormField from "../components/FormField";
import {Link, useLocation} from "react-router-dom";





function Rent(props) {

  const location = useLocation();


let image = location.state.image.image;
console.log(image);
 

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-body">
      <Row>
        <Col xs={12} sm={12} md={5} lg={5}>
          <div>
            <Card>
              <Card.Img
                variant="top"
                width="243"
                height="160"
                src={require(`../images/${image}`)}
                alt="pic of van"
              />
            </Card>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <div className="rent-border p-2">
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
                    required
                  />
                </Col>

                <Col xs={12} sm={12} lg={3}>
                  <Form.Label>Drop Off Date: </Form.Label>
                </Col>
                <Col xs={12} sm={12} lg={3}>
                  <Form.Control
                    type="date"
                    name="dropoffDate"
                    size="sm"
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
                  name="age"
                />
              </Row>

              <Row>
                <Col>
                  <div className="d-grid gap-2 p-2">
                    <Button variant="dark" size="lg">
                      Next
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Rent;
