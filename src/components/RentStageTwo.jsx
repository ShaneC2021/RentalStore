import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RentPagetwo(props) {
  const { pickUpDate, dropOffDate, rentalDuration, rentalFee } = props.data;
  const receiptDetails = props.data;
  let navigate = useNavigate();

  return (
    <>
      <div className="text-center bg-white p-1">
        <div>
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
          <div className="m-2">
            <Button
              variant="dark"
              size="sm"
              onClick={() => props.handleChangeStage(0)}
            >
              Change Dates
            </Button>
          </div>
        </div>

        <div className="mt-5 ppal">
          <PayPalScriptProvider
            options={{ "client-id": process.env.REACT_APP_CLIENT_ID }}
          >
            <PayPalButtons
             
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: props.van.description,
                      amount: {
                        currency_code: "USD",
                        value: rentalFee,
                      },
                    },
                  ],

                  application_context: {
                    shipping_preference: "NO_SHIPPING",
                  },
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);

                  let receiptInfo = {
                    details: receiptDetails,
                    order: data.orderID,
                    date: props.currentDate,
                    vehicle: props.van,
                  };

                  navigate("/RentalStore/Receipt", { state: { receiptInfo } });
                });
              }}
              style={{ shape: "pill"}} className="ppal text-center"
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
}
