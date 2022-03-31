import React from "react";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import About from "./pages/About";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";
import Receipt from "./pages/Receipt";
import {PayPalScriptProvider } from  "@paypal/react-paypal-js";


function App() {
  return (
    <div className="app-height">
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Fleet" element={<Fleet />} />
        <Route path="Rent" element={<Rent />} />
        <Route path="Receipt" element={<Receipt />} />
      </Routes>
    </div>
  );
}

export default App;
