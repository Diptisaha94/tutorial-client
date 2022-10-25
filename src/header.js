import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Link to={"/blog"}>React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/courses"}>Courses</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/faq"}>FAQ</Link>
            <Link to={"/login"}>Log In</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;