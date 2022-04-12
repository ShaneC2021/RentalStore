import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function VehicleCard(props) {
  const vehicle = props.obj;

  return (
    <Card>
      <Card.Img
        variant="top"
        width="243"
        height="160"
        src={require(`../images/${vehicle.image}`)}
        alt="pic of van"
      />
      <Card.Body>
        <Card.Title>{vehicle.name}</Card.Title>
        <Card.Text>
          {vehicle.description}
          <br />
          {vehicle.price}
        </Card.Text>

        {props.showButton? (
          <Link to="/RentalStore/Rent" state={{ vcard: { vehicle } }}>
            <Button variant="primary">Rent Me</Button>
          </Link>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default VehicleCard;
