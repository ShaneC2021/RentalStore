import React from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";

function Receipt() {
  const location = useLocation();
  const { receiptInfo } = location.state;

  return (
    <>
      <div className="main-body d-flex justify-content-center align-items-center body-color">
        <div className="receipt bg-white">
          <Table striped hover size="sm">
            <thead>
              <tr>
                <th>Order # {receiptInfo.order}</th>
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
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Receipt;
