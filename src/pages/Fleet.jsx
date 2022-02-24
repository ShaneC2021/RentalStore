import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Fleet() {
  return (
    <div className="main-body-fleet">
      <Row xs={1} md={2} lg={4} className="g-3">
        {Array.from({ length: 4}).map((_, idx) => (
        
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" width="243" height="160"src={require(`../images/fleet${idx}.jpg`)} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  lknlfnv
                </Card.Text>
                <Button variant="primary">Rent Me</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Fleet;
