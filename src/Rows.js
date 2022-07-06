import React, { useState, useEffect} from 'react'
import axios from './axios'
import './Rows.css'

const base_url = 'https://image.tmdb.org/t/p/w500/';
function Rows({title,fetchUrl}) {
    const [movies,setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();     
      }
    , [fetchUrl]);
    


  return (
    <div className='container'>
        <h2>{title}</h2>

        <div className='items'>
            {movies.map(movie =>(
                <img key={movie.id} className='item_poster'src={`${base_url}${movie.poster_path}`} alt = {movie.name} />
                 
            ))}
        </div>


    </div>
  )
}

export default Rows