import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar sticky='top' className="bg-white px-3 shadow-sm mb-3 nav-expand-lg sticky-top">
      <Container>
      <Navbar.Brand className='d-flex align-items-center' as={Link} to="/">Elisa Soon!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="flex-grow-1 justify-content-center">
          <Nav.Link as={Link} to="/posts">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/posts/new">Create Post</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link as={Link} to="/signin">
              <Button variant="primary">Sign In</Button>
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// bg="dark" variant="dark" expand="lg"


