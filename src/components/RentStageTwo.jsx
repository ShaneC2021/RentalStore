import React from "react";
import Footer from "./Footer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function RentPagetwo(props) {
  console.log(props);
 
 const {pickUpDate, dropOffDate, rentalDuration, rentalFee } = props.data; 
 const receiptDetails = props.data;


  let navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  
 

  

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

  

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  
  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
    }
  },
  [success]
);



  
 // Paypal dependencies */

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to your buyer.
      let receiptInfo = {
        details :  receiptDetails,
        order : data.orderID
         }

      console.log( data.orderID);
      alert("Transaction completed by " + details.payer.name.given_name);
     // navigate("/Receipt", { state: { receiptDetails } });
     navigate("/Receipt", { state: { receiptInfo }  });
     
      
    });
    
  };

console.log(orderID);
console.log(2, success);
console.log(3, ErrorMessage);
  return (
    <>
      <div className="text-center">
        <div>
          <p>
            Pickup Date: {pickUpDate}
            <br />
            Dropoff Date: {dropOffDate}
          </p>
        </div>
        <div>
          <p>Length of Rental: {rentalDuration} days</p>
        </div>
        <div>
          <p>Fee due: ${rentalFee}</p>
        </div>

        <Button
          variant="dark"
          size="lg"
          onClick={() => props.handleChangeStage(0)}
        >
          Back
        </Button>

        <div>
          <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_CLIENT_ID  }}>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
          </PayPalScriptProvider>
        </div>
      </div>
      
    </>
  );
  
}
