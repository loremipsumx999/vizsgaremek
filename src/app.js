import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./navbar";
import FooterComp from "./Footer"
import Login from "./login";
import Register from "./register";
import Home from "./home";
import Bentley from "./Bentley";
import Koenigsegg from "./Koenigsegg";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bentley" element={<Bentley />} />
        <Route path="/koenigsegg" element={<Koenigsegg />} />
      </Routes>
      <FooterComp />
    </Router>
    
  );
}

export default App;