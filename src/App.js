import React from "react";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Footer from "./components/Footer";
import About from "./pages/About";
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
