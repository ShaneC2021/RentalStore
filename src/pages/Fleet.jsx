import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import arrayOfVans from "../scripts/data";
import {useState} from 'react';




function Fleet() {
  console.log(arrayOfVans);
  return (
    <div className="main-body-fleet">
      <Row xs={1} md={2} lg={4} className="g-3">
        {arrayOfVans.map((item, idx) => (
        
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" width="243" height="160"src={require(`../images/${item.image}`)}  alt="pic of van" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                 {item.description}
                 <br />
                 {item.price}
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
