import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="background">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5 text-center" style={{color: "white"}}>
          <h1 className="mb-3">LUXUS | ELEGANCIA | ÉLETÉRZÉS</h1>
          <p className="mb-5">4 kerék szerelmeseitől, 4 kerék szerelmeseinek</p>
        </div>
      </div>
      <div class="car-buttons">
        <Container>
          <Row>
            <Col>            
              <Button variant="link" className="car-brands">
                <Image src={require('./img/emblems/mitsubishi.png')} thumbnail />
              </Button>
              <Button variant="link" className="car-brands">
                <Image src={require('./img/emblems/porsche.png')} thumbnail />
              </Button>
              <Button variant="link" className="car-brands" onClick={() => navigate('/koenigsegg')}>
                <Image src={require('./img/emblems/koenigsegg.png')} thumbnail />
              </Button>
              <Button variant="link" className="car-brands" onClick={() => navigate('/bentley')}>
                <Image src={require('./img/emblems/bentley.png')} thumbnail />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
