import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div className="p-3">
      <div className="contact-details p-2">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" required />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" required />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
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
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
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

