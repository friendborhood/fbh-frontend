/* eslint-disable no-unused-vars */
// import { NavLink } from 'react-router-dom';
import {
  Nav, Navbar, NavDropdown, Container,
} from 'react-bootstrap';

function MainNavigation() {
  const tabs = ['login', 'sign-up'];

  const formatTabText = (text) => {
    const myText = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(myText);
    return myText;
  };

  // const mapTabs = () => tabs.map((item, index) => (
  //   <li key={index}>
  //     <NavLink to={`/${item}`} activeClassName={classes.active}>
  //       {formatTabText(item)}
  //     </NavLink>
  //   </li>
  // ));

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
