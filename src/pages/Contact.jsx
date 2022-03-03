import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormField from "../components/FormField";

function Contact() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [values, setValues] = useState(initialValues);

  console.log(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-body p-1 d-flex flex-column align-items-center justify-content-center">
      <div className="contact-details p-2">
        <Form onSubmit={handleSubmit}>
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
              field="Email"
              type="email"
              onChange={handleChange}
              value={values.email}
              name="email"
              required
            />
            <p className="text-muted">We'll never share your email with anyone else</p>

          </Row>

          <Row>
            <FormField
              field="Phone Number ex: 1-123-456-7890"
              type="tel"
              onChange={handleChange}
              pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={values.phone}
              name="phone"
            />
          </Row>

          <Row>
            <FormField
              as="textarea"
              rows={3}
              onChange={handleChange}
              value={values.message}
              name="message"
        
            />
          </Row>

          <div className="d-grid p-3">
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
