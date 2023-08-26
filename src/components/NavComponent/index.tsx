import { Container, Nav, Navbar } from "react-bootstrap";
import '../../styles/index.css';
import { Link } from "react-router-dom";


export function NavComponent() {
  return (
    <Navbar expand="lg" className="color-bg-nav"
    >
      <Container>
      <Navbar.Brand href="#home" className="text-white custom-text-size">Marvel</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to='/' className="text-white fs-5">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
