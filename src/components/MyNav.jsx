import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Search, PersonCircle, Bell } from "react-bootstrap-icons";

const MyNav = () => (
  <Navbar expand="lg" className="bg-dark">
    <Container fluid>
      <Navbar.Brand>
        <img src={logo} width="100" height="50" className="d-inline-block align-top" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white" />
      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="text-white fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="text-white">
            Tv Genres
          </Nav.Link>
          <Nav.Link href="#link" className="text-white">
            Movies
          </Nav.Link>
          <Nav.Link href="#link" className="text-white">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" className="text-white">
            My List
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#link" className="text-white me-2">
            <Search />
          </Nav.Link>
          <Nav.Link href="#link" className="text-white me-2">
            <PersonCircle />
          </Nav.Link>
          <Nav.Link href="#link" className="text-white me-2">
            <Bell />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
