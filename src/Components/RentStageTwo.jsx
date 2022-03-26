import React from "react";
import Footer from "./Footer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";



export default function RentPagetwo(props) {
  const { firstName, lastName, age, pickUpDate, dropOffDate, rentalDuration, rentalFee } = props.data;

  console.log(props);
/*
  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
    }
  },
  [success]
);

console.log(1, orderID);
console.log(2, success);
console.log(3, ErrorMessage);
*/
  //Paypal dependencies

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);


  // check Approval
 const onApprove = (data, actions) => {
  return actions.order.capture().then(function (details) {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
    


//capture likely error
const onError = (data, actions) => {
  setErrorMessage("An Error occured with your payment ");
};
  
//

// creates a paypal order
const createOrder = (data, actions) => {
  return actions.order
    .create({
      purchase_units: [
        {
          description: props.van.description,
          amount: {
            currency_code: "USD",
            value: rentalFee,
          },
        },
      ],
      // not needed if a shipping address is actually needed
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    })
    .then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
};
return (
    <><div className="text-center">
    <div><p>Pickup Date: {pickUpDate} Dropoff Date: {dropOffDate}</p></div>
      <div><p>Length of Rental: {rentalDuration} days</p></div>
      <div><p>Fee due: ${rentalFee}</p></div>
    

        <Button
          variant="dark"
          size="lg"
          onClick={() => props.handleChangeStage(0)}
        >
          Back
        </Button>
       
        <div>
          <PayPalScriptProvider options={{ "client-id": "Afze7QtNgIHq_eXGAZfQ6jstxcjRgi-ZCxCJzcy6I3X_zEkN3-ts8iGIHMIY9zCevaZhacZD67V2mjtm" }}>
            <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove} />
          </PayPalScriptProvider>
          </div></div>
      
    </>
  );
}

//sb-zzjiq15096414@personal.example.com