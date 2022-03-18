/* eslint-disable no-unused-vars */
import {
  Nav, Navbar, NavDropdown, Container,
} from 'react-bootstrap';

function MainNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="./photo/logo.png"
          width="350px"
          alt="Logo"
        />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="System" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/coins-info">Coins System</NavDropdown.Item>
            <NavDropdown.Item href="/workflow">How it works</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/rules">Rules</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/Sign-up">Sign-up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavigation;
