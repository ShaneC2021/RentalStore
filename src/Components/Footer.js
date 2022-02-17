import React from 'react';
import { Twitter } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';


function Footer() {
  return (
    <div className="footer d-flex justify-content-between p-3"><div><h6>Follow Us On</h6><Twitter /><Facebook/><Instagram /></div>
    <div><h6>Customer Assistance</h6></div><div><h6>Resources</h6></div></div>
  )
}

export default Footer