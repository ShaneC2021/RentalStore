import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function VehicleCard(props) {
  const vehicle = props.obj;
 
  return (
    <CardGroup>
      <Card>
        <Card.Img
          className="card-img-top"
          variant="top"
          src={require(`../images/${vehicle.image}`)}
          alt="pic of van"
        />
        <Card.Body className="text-center nav-font">
          <Card.Title>{vehicle.name} </Card.Title>
          <Card.Text>
            {vehicle.description}<br/>
            {vehicle.price}
          </Card.Text>

          {props.showButton ? (
            <Link to="/RentalStore/Rent" state={{ vcard: { vehicle } }}>
              <Button variant="primary m-0">Pick Me</Button>
            </Link>
          ) : null}
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default VehicleCard;
