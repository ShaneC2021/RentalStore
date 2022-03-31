import React from 'react';
import Footer from '../components/Footer';
import {useLocation} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Receipt() {
    const location = useLocation();
    const {receiptDetails} = location.state;
    console.log(receiptDetails);


  return (
    <>
      <div className="main-body d-flex justify-content-center"><div>
        <Table striped hover size="sm">
            <thead>
                <tr>
                    <th>Order #</th>
                    
                    
                </tr>
            </thead>
            <tbody>
              <tr><td>Name: </td><td>{receiptDetails.firstName} {receiptDetails.lastName}</td></tr>    
              <tr><td>Rental Period: </td><td>{receiptDetails.pickUpDate} to {receiptDetails.dropOffDate}</td></tr>    
              <tr><td>Fee paid: </td><td>${receiptDetails.rentalFee}</td></tr>    
              <tr><td>Date: </td><td></td></tr>    
            </tbody>
        </Table>    </div>
      </div><Footer />
    </>

  )
}

export default Receipt