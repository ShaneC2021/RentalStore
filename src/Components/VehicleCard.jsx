import React from "react";
import { Card, Button } from "react-bootstrap";

function VehicleCard (props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        width="243"
        height="160"
        src={require(`../images/${props.data.image}`)}
        alt="pic of van"
      />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          {props.data.description}
          <br />
          {props.data.price}
        </Card.Text>
        <Button variant="primary">Rent Me</Button>
      </Card.Body>
    </Card>
  );
}

export default VehicleCard;
