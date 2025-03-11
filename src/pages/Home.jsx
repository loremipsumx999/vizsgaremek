import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Button, Carousel, Image } from 'react-bootstrap';
import Slide1 from '../img/Bentley/FlyingSpur.jpg';
import Slide2 from '../img/bg.jpg';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5 text-center" style={{ color: "white" }}>
          <h1 className="mb-3">LUXUS | ELEGANCIA | ÉLETÉRZÉS</h1>
          <p className="mb-5">4 kerék szerelmeseitől, 4 kerék szerelmeseinek</p>
        </div>
      </div>

      <div className="mt-5">
        <Container className='text-center carButtons'>
          <Row>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands">
                <Image src={require('../img/brandlogos/mitsubishi.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands">
                <Image src={require('../img/brandlogos/porsche.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/koenigsegg')}>
                <Image src={require('../img/brandlogos/koenigsegg.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/bentley')}>
                <Image src={require('../img/brandlogos/bentley.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/')}>
                <Image src={require('../img/brandlogos/lamborghini.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/')}>
                <Image src={require('../img/brandlogos/mercedes.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/')}>
                <Image src={require('../img/brandlogos/pagani.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/')}>
                <Image src={require('../img/brandlogos/rollsroyce.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/')}>
                <Image src={require('../img/brandlogos/ferrari.png')} fluid />
              </Button>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <Button variant="link" className="car-brands" onClick={() => navigate('/')}>
                <Image src={require('../img/brandlogos/astonmartin.png')} fluid />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='carousel-container mt-5 mb-5'>
        <Carousel fade>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Slide1} alt="Bentley Flying Spur Mulliner" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Slide2} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Slide1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
