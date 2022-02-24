import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
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
    <div className=" main-body p-1 d-flex flex-column align-items-center justify-content-center">
      <div className="contact-details p-2">
        
        <Form onSubmit={handleSubmit}>
          <Row className="mb-0">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                name="email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Phone Number ex: 1-123-456-789</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={values.phone}
                onChange={handleChange}
                name="phone"
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={values.message}
                onChange={handleChange}
                name="message"
                required
              />
            </Form.Group>
          </Row>
          <div className="d-grid">
            <Button variant="dark" type="submit" size="lg">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
