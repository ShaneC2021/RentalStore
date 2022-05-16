import React from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import VehicleCard from "../components/VehicleCard";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Receipt() {
  const location = useLocation();
  const { receiptInfo } = location.state;

  let vehicleId = receiptInfo.vehicle.vehicle;

  function getStorageValue(key) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved || "[]");
    return initial;
  }
  const vehicleSchedule = getStorageValue(vehicleId);
  const newSchedule = [...vehicleSchedule];
  newSchedule.push({
    pickUp: receiptInfo.details.pickUpDate,
    dropOff: receiptInfo.details.dropOffDate,
  });
  localStorage.setItem(vehicleId, JSON.stringify(newSchedule));

  return (
    <>
      <div className="main-body d-flex flex-column align-items-center body-color m-0">
        <div className="receipt-image">
          <VehicleCard obj={receiptInfo.vehicle} />
        </div>
        <div className="table-holder">
          <Table hover className="bg-white table-holder" size="sm">
            <thead>
              <tr>
                <th className="w-25">Order</th>
                <th className="w-75">{receiptInfo.order}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-25">Name: </td>
                <td>
                  {receiptInfo.details.firstName} {receiptInfo.details.lastName}
                </td>
              </tr>
              <tr>
                <td>Rental Period: </td>
                <td>
                  {receiptInfo.details.pickUpDate} to{" "}
                  {receiptInfo.details.dropOffDate}
                </td>
              </tr>
              <tr>
                <td>Fee paid: </td>
                <td>${receiptInfo.details.rentalFee}</td>
              </tr>
              <tr>
                <td>Date: </td>
                <td>{receiptInfo.date}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <LinkContainer to="/RentalStore">
            <Button variant="secondary" size="sm" className="mb-3">
              Return to Main Page
            </Button>
          </LinkContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Receipt;
