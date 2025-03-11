import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

function Koenigsegg(){
    const [koenigseggs, setKoenigseggs] = useState([]);
    const [error, setError] = useState("");

    const fetchKoenigseggs = async () =>{
        try{
            const response = await fetch("http://localhost:3000/Koenigseggs");
            const data = await response.json();
            if (response.ok){
                setKoenigseggs(data);
            }
            else{
                setError("Error fetching data");
            }
        }
        catch (err){
            setError("Failed to fetch Koenigseggs");
        }
    };

    useEffect(() => {
        fetchKoenigseggs();
    }, []);

    return(
        <div className="mt-5">
            <h2 className="text-center">Koenigsegg</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <div className="row mt-5">
                {koenigseggs.length > 0 ? (
                    koenigseggs.map((car) => (
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
                    <p className="text-center">A pillanatban nincsenek Koenigsegg autóink.</p>
                ) : null}
            </div>
        </div>
    )
}
export default Koenigsegg;