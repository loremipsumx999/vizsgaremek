import { Link } from 'react-router-dom';
import { Dropdown, Button, Nav, Navbar, Container } from 'react-bootstrap';

function NavbarComp({ user, onLogout }) {
  
  return (
    <Navbar expand="lg" className="navbar-custom" style={{backgroundColor: "white"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">Race-001 Kölcsönző</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Főoldal</Nav.Link>
            <Nav.Link as={Link} to="/Cars">Autóink</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Kapcsolat</Nav.Link>
            <Nav.Link as={Link} to="/About">Rólunk</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
          <div className='ms-auto'>
              <Dropdown>
                <Dropdown.Toggle bsPrefix='none' variant='none'>
                  <i class="material-icons">favorite</i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/">asd</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {user ? (
              <>
                <Nav.Link as={Link} to="/Profile">Profil</Nav.Link>
                <Button variant="outline-dark" size="sm" onClick={onLogout}>Kijelentkezés</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Login">Bejelentkezés</Nav.Link>
                <Nav.Link as={Link} to="/Register">Regisztráció</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
