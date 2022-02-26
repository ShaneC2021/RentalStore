import React from "react";
import { Row, Col } from "react-bootstrap";
import arrayOfVans from "../scripts/data";
import {useState} from 'react';
import VehicleCard from "../components/VehicleCard";




function Fleet() {
  
const [array, setArray] = useState(arrayOfVans)

  return (
    <div className="main-body-fleet">
      <Row xs={1} md={2} lg={4} className="g-3">
        {array.map((item, idx) => (
          <Col key={idx}>
        <VehicleCard data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Fleet;