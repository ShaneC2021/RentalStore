import React from "react";
import Footer from "../components/Footer";

function About() {
  return (<>
    <div className="body-color main-body d-flex flex-column align-items-center justify-content-center text-center">
      <div className="contact-details about m-2">
      <div><h2>About Us</h2></div>
      <div className="p-4 ">
      <p>
        We are a small unique family owned business dedicated to providing a
        quality easy to use rental service to travellers in the Arkansas region with a sense of
        adventure. We specialize in Campervans both modern and vintage. Whether
        you are seeking a weekend get away or a 3 month expedition into the
        wild, we have a Camper for you. We look forward to assisting you in
        making that adventure of a lifetime become reality.
      </p>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default About;
