import React from "react";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Fleet from "./Components/Fleet";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app-height">
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Fleet" element={<Fleet/>}/>
      </Routes>
      <Footer />
      
    </div>
  );
}


export default App;
