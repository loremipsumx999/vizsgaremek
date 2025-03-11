import { Col, Row, Container, Button, Form } from "react-bootstrap";
import background from "../img/contactbg.jpg";

export default function Contact(){
    return(
        <div className="text-center"
        style={{
            
            }}    
        >
            <h1>Kapcsolat</h1><hr />
            <h3>Vedd fel velünk a kapcsolatot!</h3>
            <p className="mb-5">Ha bármilyen kérdése van, vagy segítségre lenne szüksége, ügyfélszolgálatunk a nap 24 órájában a elérhető.</p>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="text-start" style={{ width: '100%' }}>Felhasználónév</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="text-start" style={{ width: '100%' }}>Email cím</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-start" style={{ width: '100%' }}>Üzenet</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">Küldés</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={6}>
                    <div className="d-flex align-items-center mt-3 mb-3">
                        <i className="material-icons">email</i>
                        <p className="mb-0 ms-2">kucsikgabor22@gmail.com</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <i class="material-icons">&#xe0c8;</i>
                        <p className="mb-0 ms-2">Székesfehérvár Gáz utca 1/D</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <i class="material-icons">&#xe0b0;</i>
                        <p className="mb-0 ms-2">+36702305803</p>
                    </div>
                    <hr />
                    </Col>
                </Row>
            </Container>
    
        </div>
    );
}