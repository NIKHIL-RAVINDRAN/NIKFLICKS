import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
    }
        , []);

    return (
        <div>
            <header className='banner' style={{ backgroundSize: 'cover', backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`, backgroundPosition: 'center center' }}>
                <div className='banner_items'>
                    <h1 className='banner_title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <h1 className='banner_description'>
                        {movie?.overview}
                    </h1>
                </div>
                <div className='banner_bottom' />
            </header>

        </div>
    )
}

export default Banner