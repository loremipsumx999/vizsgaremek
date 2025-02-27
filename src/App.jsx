import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Navbar";
import FooterComp from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Cars from "./Cars";
import Bentley from "./Bentley";
import Koenigsegg from "./Koenigsegg";

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
        <Router>
            <NavbarComp user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/bentley" element={<Bentley />} />
                <Route path="/koenigsegg" element={<Koenigsegg />} />
                <Route path="/Cars" element={<Cars />} />
            </Routes>
            <FooterComp />
        </Router>
    );
}

export default App;
