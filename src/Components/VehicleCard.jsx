import React from "react";
import { Card, Button } from "react-bootstrap";

function VehicleCard ({image,name,description,price}) {
  return (
    <Card>
      <Card.Img
        variant="top"
        width="243"
        height="160"
        src={require(`../images/${image}`)}
        alt="pic of van"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
          <br />
          {price}
        </Card.Text>
        <Button variant="primary">Rent Me</Button>
      </Card.Body>
    </Card>
  );
}

export default VehicleCard;
