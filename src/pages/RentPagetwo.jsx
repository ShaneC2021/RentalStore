import React from 'react';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';



export default function RentPagetwo() {
const location = useLocation();
const customerInfo = location.state.customer.values;

const {firstName, lastName, pickupDate, dropOffDate, age} = customerInfo;

// Also need to import picture of vehicle for this page as well
// place info in table or custom divs ??
//need to calculate fees due and have a insert confirmation button which leads to payment page 
// and back button which teakes customer to previous page to edit details

  return (<>
    <div className="main-body">RentPagetwo
    <div>FirstName: {firstName}</div>
    <div>LastName: {lastName}</div>
    <div>Age: {age}</div>
    <div>x days</div>
    <div>Cost</div>
    </div>
    <Footer/>
    </>
  )
}
