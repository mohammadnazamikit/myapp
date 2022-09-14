import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import TVShow from './Components/TVShow';

import {BrowserRouter, Routes,Route} from "react-router-dom"
import MovieDetails from './Components/MovieDetails';
import Movies from './Components/Movies';
import { useEffect, useState } from 'react';


function App() {

  const [movie,setMovie]= useState(null)

  useEffect(()=>{
    fetch()

  },[])

  return (
   
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Movies/>} />
      <Route path='/tv-shows' element={<TVShow></TVShow>} />
      <Route path='/moviedetails/:id' element={<MovieDetails></MovieDetails>}/>
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
