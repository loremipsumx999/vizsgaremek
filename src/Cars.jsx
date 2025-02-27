import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

function Cars(){
    const [cars, setCars] = useState([]);
    const [error, setError] = useState("");

    const fetchCars = async () =>{
        try{
            const response = await fetch("http://localhost:3000/getAllCars");
            const data = await response.json();
            if (response.ok){
                setCars(data);
            }
            else{
                setError("Error fetching cars");
            }
        }
        catch (err){
            setError("Failed to fetch cars.");
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return(
        <div className="mt-5">
            {error && <p className="text-danger text-center">{error}</p>}
            <div className="row mt-5">
                {cars.length > 0 ? (
                    cars.map((car) => (
                        <div key={car.id} className="col-md-4 mb-3">
                            <Card className="shadow">
                                <Card.Body>
                                    {car.image_url && (
                                    <Card.Img variant="top" src={car.image_url} alt={car.name} />
                                    )}
                                    <Card.Title className='mt-2'>{car.brand}</Card.Title>
                                    <Card.Text className='mt-3'>
                                        {car.name}<br />
                                        {car.year}<br />
                                        {car.engine}
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
    )
}
export default Cars;