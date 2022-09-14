import { Card, ListGroup, Button, Container, Row, Col } from "react-bootstrap";

import { Link,useLocation,useNavigate } from "react-router-dom";



const Cards = (props)=> {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(navigate)
    console.log(location)
    
        return(
        <>
         <Container>
        <Row>
        {props.movies && props.movies.map((movie)=>{
                        return(
                                <Card key={movie.imdbID} style={{ width: '12rem', margin:12 }}>
                                     <Card.Img variant="top" src={movie.Poster} />
                                     <Card.Body>
                                       <Card.Title>{movie.Title}</Card.Title>
                                       <Link to={"/moviedetails/"+ movie.imdbID}><Button  variant="dark">Details</Button></Link>
                                    </Card.Body>
                                </Card>)
         }
         )
         }
          </Row>
                            </Container>   
        </>
        )
    }
export default Cards