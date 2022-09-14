import { useEffect } from "react"
import { useState } from "react"
import { Container,Row,Col,Card,Button } from "react-bootstrap"
import { useLocation,useNavigate, useParams } from "react-router-dom"


const MovieDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    console.log("location",location)
    console.log("Params is this",params)
    const [movie,setMovie]= useState(null)

    const id = params.id
    console.log(id)
    const api = "c4a92971"





    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${api}&i=${id}`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setMovie(data)
        })
    },[])

return(
    <>
    <Container>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
             {movie && <Card.Img variant="top" src={movie.Poster} />}  
            </Card>
            </Col>
            <Col>
            <Card className="bg-dark text-white">
            <Card.Body>
            {movie && <Card.Title>{movie.Title}</Card.Title>}
             <Button variant="success">Go To IMdb</Button>
             </Card.Body>

    </Card>
            </Col>
        </Row>

    </Container>
    
      
    </>
)
}
export default MovieDetails