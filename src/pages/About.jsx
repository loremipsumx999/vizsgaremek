import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Col, Row, Button} from 'react-bootstrap';
function AboutUs(){
    return(
        <div className="hero">
            <Container className='text-center rolunk'>
                <h1 >Race-001 Autókölcsönző - Rólunk</h1>
                <p>Itt lesznek rólunk információk</p>
                <Button as={Link} to="/Contact" className='mb-5' variant="light">Kapcsolatfelvétel</Button>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} md={4} className='text-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate arcu ac ipsum tincidunt vestibulum. Duis fermentum, metus id sodales placerat, enim sapien viverra ex, sed porttitor nisi justo ac dui. Etiam in est sit amet leo congue sodales sollicitudin eu metus. Maecenas bibendum laoreet urna varius sollicitudin. Vestibulum sit amet eros neque. Vivamus est enim, laoreet ut dolor at, pretium tristique felis. In tempor finibus purus, in laoreet turpis consequat vel. Nam at maximus turpis. Suspendisse pellentesque eu dolor dapibus interdum. Pellentesque tristique magna a facilisis laoreet. Duis vitae nibh hendrerit, hendrerit sapien a, ultricies ligula.</p>
                    </Col>
                    <Col md={4} className='text-center'>
                        <p></p>
                    </Col>
                    <Col xs={12} md={4} className='text-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate arcu ac ipsum tincidunt vestibulum. Duis fermentum, metus id sodales placerat, enim sapien viverra ex, sed porttitor nisi justo ac dui. Etiam in est sit amet leo congue sodales sollicitudin eu metus. Maecenas bibendum laoreet urna varius sollicitudin. Vestibulum sit amet eros neque. Vivamus est enim, laoreet ut dolor at, pretium tristique felis. In tempor finibus purus, in laoreet turpis consequat vel. Nam at maximus turpis. Suspendisse pellentesque eu dolor dapibus interdum. Pellentesque tristique magna a facilisis laoreet. Duis vitae nibh hendrerit, hendrerit sapien a, ultricies ligula.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutUs;