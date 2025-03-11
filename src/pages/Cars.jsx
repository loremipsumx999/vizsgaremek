import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cars() {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState("");
    const [favorites, setFavorites] = useState({});

    const navigate = useNavigate()

    const fetchCars = async () => {
        try {
            const response = await fetch("http://localhost:3000/getAllCars");
            const data = await response.json();
            if (response.ok) {
                setCars(data);
                const initialFavorites = data.reduce((acc, car) => {
                    acc[car.id] = false;
                    return acc;
                }, {});
                setFavorites(initialFavorites);
            } else {
                setError("Error fetching cars");
            }
        } catch (err) {
            setError("Failed to fetch cars.");
        }
    };

    const handleFavoriteClick = (carId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [carId]: !prevFavorites[carId],
        }));
    };

    const handleRentClick = (car) => {
        navigate('/rent', { state: { car } });
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div>
            {error && <p className="text-danger text-center">{error}</p>}
            <div className="row">
                <h2 style={{ textAlign: 'center' }} className='mb-5 mt-2'>Fedezd fel a legújabb luxus modelleket!</h2>
                {cars.length > 0 ? (
                    cars.map((car) => (
                        <div key={car.id} className="col-md-4 mb-3">
                            <Card className="shadow">
                                <Card.Body style={{backgroundColor: '#EDEDED'}}>
                                    {car.image_url && (
                                        <Card.Img variant="top" src={car.image_url} alt={car.name} />
                                    )}
                                    <Card.Title className='mt-2'>{car.brand}</Card.Title><hr />
                                    <Card.Text className='mt-3'>
                                        {car.name}<br />
                                        {car.year}<br />
                                        {car.engine}
                                        <div className='d-flex justify-content-end'>
                                            <Button variant='none' style={{border: 'none'}}><i style={{cursor: 'pointer'}}
                                                className={`material-icons ${favorites[car.id] ? 'text-dark' : ''}`}
                                                onClick={() => handleFavoriteClick(car.id)}
                                            >
                                                {favorites[car.id] ? 'favorite' : 'favorite_border'}
                                            </i></Button>
                                            <Button variant='outline-dark' onClick={() => handleRentClick(car)}>Kölcsönzés</Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : !error ? (
                    <p className="text-center">A pillanatban nincsenek autóink.</p>
                ) : null}
            </div>
        </div>
    );
}

export default Cars;
