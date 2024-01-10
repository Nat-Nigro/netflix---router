import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Grid, Grid1x2Fill } from "react-bootstrap-icons";

const SecondNav = () => (
  <Navbar expand="lg" className="bg-dark my-2">
    <Container fluid>
      <Navbar.Brand href="#home" className="fs-3 fw-bold text-white">
        TV Shows
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Genres" className="border border-white bg-white text-white ms-2" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#">Drama</NavDropdown.Item>
            <NavDropdown.Item href="#">Thriller</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#link" className="text-white me-2">
            <Grid />
          </Nav.Link>
          <Nav.Link href="#link" className="text-white me-2">
            <Grid1x2Fill />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default SecondNav;
