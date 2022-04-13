import React from "react";
import { Row, Col } from "react-bootstrap";
import arrayOfVans from "../scripts/data";
import {useState} from 'react';
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";




function Fleet() {
  const [array] = useState(arrayOfVans)  //initalize array with imported van info

  return (<>
    <div className="main-body-fleet body-color">
      <Row xs={1} md={2} lg={3} className="g-3">
        {array.map((item, idx) => (
      
          <Col key={idx}>
            <VehicleCard obj={item} showButton={true} />
          </Col>
        
        ))}
      </Row>
    </div>
    <Footer /> </>
  );

}

export default Fleet;