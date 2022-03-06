import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useLocation} from 'react-router-dom';

import {Link} from 'react-router-dom'


function VehicleCard({ image, name, description, price }) {
const location = useLocation();



  console.log(location);
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
        <Link  to="/Rent" state={{image:{image}}}> 
          <Button variant="primary">Rent Me</Button>
        </Link>
          
        
      </Card.Body>
    </Card>
  );
}

export default VehicleCard;

           
          