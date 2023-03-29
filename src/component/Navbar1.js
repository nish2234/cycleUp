import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import logo from './logo.jpg';



import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar   expand="lg" fixed = "top">
      <Container >
        <img src={logo} alt="assd" className='lo me-4' />
        <Navbar.Brand className='nav1'>Cycle Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
          <Nav.Link className = 'nav2' href="#action1">Home</Nav.Link>
            <Nav.Link className = 'nav2' href="#action1">Customers</Nav.Link>
          
            
             
           
          </Nav>
          <Form className="d-flex">
          <Nav.Link className="me-4 nav2" href="#action1">{user && user.email}</Nav.Link>
          <button class="button-86" type="button" onClick={handleLogout}>Logout</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

 
export default Navbar1
