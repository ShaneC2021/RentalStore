import React from "react";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import About from "./pages/About";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";
import Receipt from "./pages/Receipt";



function App() {
  return (
    <div className="">
      <Navigation />
      <Routes basename="/RentalStore">
        <Route index element={<Home />} />
        <Route path="/RentalStore" element={<Home />} />
        <Route path="/RentalStore/Contact" element={<Contact />} />
        <Route path="/RentalStore/About" element={<About />} />
        <Route path="/RentalStore/Fleet" element={<Fleet />} />
        <Route path="/RentalStore/Rent" element={<Rent />} />
        <Route path="/RentalStore/Receipt" element={<Receipt />} />
      </Routes>
    </div>
  );
}

export default App;
