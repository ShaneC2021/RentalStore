import React from "react";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

export default function RentPagetwo(props) {
  const { firstName, lastName, age, pickUpDate, dropOffDate, rentalDuration, rentalFee } = props.data;

  return (
    <>
      <div className="main-body">
        RentPagetwo
        <div>FirstName: {firstName}</div>
        <div>LastName: {lastName}</div>
        <div>Age: {age}</div>
        <div>Pickup Date: {pickUpDate} Dropoff Date: {dropOffDate}</div>
        <div>{rentalDuration}days</div>
        <div>${rentalFee}</div>
        <Button
          variant="dark"
          size="lg"
          onClick={() => props.handleChangeStage(0)}
        >
          Back
        </Button>
        <Button variant="dark" size="lg">
          Confirm
        </Button>
      </div>
    </>
  );
}
