import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <LinkContainer to="/">
        <Navbar.Brand>Elisa Soon!</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/posts">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to={'/posts'}>
            <Nav.Link>Posts</Nav.Link>
          </LinkContainer> */}
          <LinkContainer to="/posts/new">
            <Nav.Link>Create Post</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/posts/edit/:id">
            <Nav.Link>Edit Post</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;