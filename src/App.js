import React from "react";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Footer from "./components/Footer";
import About from "./pages/About";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-height">
      <Navigation/>
      <Routes>
        <Route index element={<Home />} />
        <Route path ="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Fleet" element={<Fleet />} />
        <Route path="Rent" element={<Rent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
