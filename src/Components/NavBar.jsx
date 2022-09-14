import { Component} from "react";
import { Image, NavLink } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaBell, FaSearch} from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";



const NavBar=()=> {

  const location = useLocation()
  
           return(
             <Navbar bg="light" expand="lg" className="bg-dark text-primary">
            <Container fluid>
              <Navbar.Brand href="#" className="text-primary">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
               
                 <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                 
                  <Link to={"/"} className="nav-link text-white">Home</Link>
                  <Link to="/tv-shows" className={location.pathname === "/tv" ? "nav-link active text-white" : "nav-link text-white"} >TV Shows</Link>
                  <Nav.Link href="#action1" className="text-white" >Movies</Nav.Link>
                </Nav>
               <Nav className="ml-auto">
                <Nav.Link href="#" className="text-white" > <FaSearch/></Nav.Link>
                <Nav.Link href="#" className="text-white">KIDS</Nav.Link>
                <Nav.Link href="#" className="text-white"><FaBell/></Nav.Link>
                <NavDropdown  title={<Image src="../Components/" className="m-auto"/>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                action
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               action
              </NavDropdown.Item>
            </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }


export default NavBar