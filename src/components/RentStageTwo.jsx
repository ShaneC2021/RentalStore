import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RentPagetwo(props) {

  const { pickUpDate, dropOffDate, rentalDuration, rentalFee } = props.data;
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
  }, [success]);

  // Paypal dependencies */

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to your buyer.
      let receiptInfo = {
        details: receiptDetails,
        order: data.orderID,
      };

      console.log(data.orderID);
      alert("Transaction completed by " + details.payer.name.given_name);
      setSuccess(true);
      navigate("/RentalStore/Receipt", { state: { receiptInfo } });
    });
  };

  return (
    <>
      <div className="text-center main-body bg-light p-1">
        <div><div>
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
        <div className="m-2">

        <Button
          variant="dark"
          size="lg"
          onClick={() => props.handleChangeStage(0)}
        >
          Change Dates
        </Button>
        </div></div>

        <div className="mt-5">
          <PayPalScriptProvider
            options={{ "client-id": process.env.REACT_APP_CLIENT_ID }}
          >
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
}
