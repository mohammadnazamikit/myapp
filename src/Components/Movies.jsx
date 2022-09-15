import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import Cards from "./Cards"

const Movies = () => {
    const api = "c4a92971"
    const id = "tt02415271"
    const name= "harry%20potter"

    const [movies, setMovies] = useState(null)


    useEffect(()=>{
        fetching()
    },[])

    const location = useLocation()

   const fetching=()=>{
    fetch(`http://www.omdbapi.com/?apikey=${api}&s=${name}`)
    .then(Response => Response.json())
    .then(data =>{
        setMovies(data.Search)
        console.log(location)
    }
        )
    }

    return(
        <>
        {movies && <Cards movies={movies} />}
        </>
    )
}
export default Movies