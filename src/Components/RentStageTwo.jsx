import React from "react";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

export default function RentPagetwo(props) {

  const {firstName,lastName,age,rental,duration} = props.data;
  // const { firstName, lastName, pickupDate, dropOffDate, age } = customerInfo;
console.log(props.data);
  // place info in table or custom divs ??
  // need to calculate fees due and have a insert confirmation button which leads to payment page
  // and back button which takes customer to previous page to edit details

  return (
    <>
      <div className="main-body">
        RentPagetwo
        <div>FirstName: {firstName}</div>
        <div>LastName: {lastName}</div>
        <div>Age: {age}</div>
        <div>x days</div>
        <div>Cost</div>
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
