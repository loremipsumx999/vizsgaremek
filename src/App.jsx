import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import NavbarComp from "./Navbar";
import FooterComp from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import AboutUs from "./pages/About.jsx";
import Profil from "./Profile.jsx";
import Rent from "./pages/Rent.jsx";
import Contact from "./pages/Contact.jsx";
import Bentley from "./pages/cars/Bentley";
import Koenigsegg from "./pages/cars/Koenigsegg";

function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    const handleLogin = (userData, token) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem("token", token);
    };

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <div>
        <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>
        <Router>
            <NavbarComp user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/Cars" element={<Cars />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Profile" element={<Profil />} />
                <Route path="/Rent" element={<Rent />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/bentley" element={<Bentley />} />
                <Route path="/koenigsegg" element={<Koenigsegg />} />

            </Routes>
            <FooterComp />
        </Router>
        </div>
    );
}

export default App;
