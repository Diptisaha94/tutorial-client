import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const userInfo = useContext(AuthContext);
  const {user,logOut}=userInfo;
  const navigate=useNavigate();
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
            <Link className='me-4' to={"/courses"}>Courses</Link>
            <Link className='me-4' to={"/blog"}>Blog</Link>
            <Link className='me-4' to={"/faq"}>FAQ</Link>
            <span className='me-4'>{user?.photoURL&& user?.displayName ?<Image title={user.displayName} style={{height:'40px',borderRadius:"50%"}} src={user.photoURL}></Image>:
            <FaUserCircle className='fs-2'></FaUserCircle>
            }</span>
            <span>
              {user && user.uid?<Button onClick={handleSignOut}>Sign Out</Button>:<Link to={'/login'}><Button>Login</Button></Link>}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;