import { Col, Container, Row} from "react-bootstrap"
import {NavDropdown} from "react-bootstrap"
import Trending from "./Trending"
import Cards from "./Cards"
import { BrowserRouter, Router, useLocation, useNavigate } from "react-router-dom"
import React from "react"
import Movies from "./Movies"

const TVShow =()=> {
    const location = useLocation()
    const navigate = useNavigate()
    console.log("location pathname",location.pathname)
    console.log(navigate)
   
        return(
            <>
            <Container className="m-0">
                <Row >
                <Col className="col-3" >
                    <p className="fw-bold text-white m-0" style={{fontSize:40}}>TV Shows</p>
                
                </Col>
                <Col>
                <NavDropdown   title="Genres" className="border border-secondary text-secondary col-2 mt-3" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">drama</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Romance</NavDropdown.Item>
            </NavDropdown>
                </Col>
                </Row>
            </Container>
            <Trending/>
            <Container>
            <Row>
              <Col>
        <Movies></Movies> 
           </Col>
              </Row>
             </Container>
            </>

        )
    }


export default TVShow