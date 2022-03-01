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
    <div className=" main-body p-1 d-flex flex-column align-items-center justify-content-center">
      <div className="contact-details p-2">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-0">
            <FormField
              field="First Name"
              type="text"
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
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
              type="text"
              onChange={handleChange}
              value={values.email}
              name="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Row>

          <Row>


          <FormField
              field="phoneNumber"
              type="tel"
              onChange={handleChange}
              pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={values.phone}
              name="phone"
            />
          





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

/*


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
             </Form.Group>  */
