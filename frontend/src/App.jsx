import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Index.css";
=======
import { useNavigate } from "react-router-dom";
import "./styles/Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> c86ca1c51be4ef5c25da9306e4ded06230c0ec78
import { Helmet } from "react-helmet";
import NavbarComp from "./pages/components/Navbar.jsx";
import FooterComp from "./pages/components/Footer.jsx";
import Login from "./Login";
import Register from "./Register";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import AboutUs from "./pages/About.jsx";
import Profil from "./pages/Profile.jsx";
import Rent from "./pages/Rent.jsx";
import PostRent from "./pages/PostRent.jsx";
import Contact from "./pages/Contact.jsx";
<<<<<<< HEAD
import AdminPanel from "./pages/AdminPanel.jsx";
=======
>>>>>>> c86ca1c51be4ef5c25da9306e4ded06230c0ec78

import Bentley from "./pages/cars/Bentley";
import Koenigsegg from "./pages/cars/Koenigsegg";
import Mercedes from "./pages/cars/Mercedes.jsx";
import Porsche from "./pages/cars/Porsche.jsx";
import Lamborghini from "./pages/cars/Lamborghini.jsx";
import Pagani from "./pages/cars/Pagani.jsx";
import BMW from "./pages/cars/BMW.jsx";
import RollsRoyce from "./pages/cars/RollsRoyce.jsx";
import AstonMartin from "./pages/cars/AstonMartin.jsx";
import Ferrari from "./pages/cars/Ferrari.jsx";

function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [favoritesUpdated, setFavoritesUpdated] = useState(false);

    useEffect(() => {
        if (token) {
            fetch("http://localhost:3000/user", {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.username) {
                        setUser(data);
                    } else {
                        localStorage.removeItem("token");
                        setToken(null);
                    }
                })
                .catch((error) => {
                    console.error("Sikertelen hitelesítés:", error);
                    localStorage.removeItem("token");
                    setToken(null);
                });
        }
    }, [token]);

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

    const handleFavoriteChange = () => {
        setFavoritesUpdated(prev => !prev);
    };

    return (
        <div>
        <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>
        <Router>
            <NavbarComp 
                user={user} 
                onLogout={handleLogout} 
                favoritesUpdated={favoritesUpdated} 
            />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/Cars" element={<Cars onFavoriteChange={handleFavoriteChange} />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Profile" element={<Profil token={token} />} />
                <Route path="/Rent" element={<Rent />} />
<<<<<<< HEAD
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/PostRent" element={<PostRent />} />
                <Route path="/Login" element={<Login onLogin={handleLogin} />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Bentley" element={<Bentley />} />
                <Route path="/Koenigsegg" element={<Koenigsegg />} />
                <Route path="/Mercedes" element={<Mercedes />} />
                <Route path="/Porsche" element={<Porsche />} />
                <Route path="/Lamborghini" element={<Lamborghini />} />
                <Route path="/Pagani" element={<Pagani />} />
                <Route path="/Bmw" element={<BMW />} />
                <Route path="/Rollsroyce" element={<RollsRoyce />} />
                <Route path="/Astonmartin" element={<AstonMartin />} />
                <Route path="/Ferrari" element={<Ferrari />} />
=======
                <Route path="/PostRent" element={<PostRent />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/bentley" element={<Bentley />} />
                <Route path="/koenigsegg" element={<Koenigsegg />} />
                <Route path="/mercedes" element={<Mercedes />} />
                <Route path="/porsche" element={<Porsche />} />
                <Route path="/lamborghini" element={<Lamborghini />} />
                <Route path="/pagani" element={<Pagani />} />
                <Route path="/bmw" element={<BMW />} />
                <Route path="/rollsroyce" element={<RollsRoyce />} />
                <Route path="/astonmartin" element={<AstonMartin />} />
                <Route path="/ferrari" element={<Ferrari />} />
>>>>>>> c86ca1c51be4ef5c25da9306e4ded06230c0ec78
            </Routes>
            <FooterComp />
        </Router>
        </div>
    );
}

export default App;