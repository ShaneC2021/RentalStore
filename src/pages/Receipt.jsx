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
  return (
    <>
      <div className="main-body d-flex justify-content-center align-items-center body-color">
        <div className="mb-2">
          <div>
            <VehicleCard obj={receiptInfo.vehicle} />
          </div>
          <Table hover bordered className="bg-light">
            <thead>
              <tr>
                <th>Order # </th>
                <th>{receiptInfo.order}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name: </td>
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
          
        <div className="d-flex justify-content-center">
          <LinkContainer to="/RentalStore">
            <Button variant="secondary" size="sm">Return to Main Page</Button>
          </LinkContainer>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Receipt;
