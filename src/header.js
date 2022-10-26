import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
  const userInfo = useContext(AuthContext);
  const {user,logOut}=userInfo;
  const handleSignOut =()=>{
    logOut()
    .then()
    .catch()
  }
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Link to={"/blog"}>React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='align-items-center'>
            <Link to={"/courses"}>Courses</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/faq"}>FAQ</Link>
            <Link to={"/login"}>Log In</Link>
            <span>{user?.displayName}</span>
            <span>{user?.photoURL ?<Image style={{height:'40px',borderRadius:"50%"}} src={user.photoURL}></Image>:
            "no image"
            }</span>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;