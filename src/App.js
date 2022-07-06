import React from 'react';
import './App.css';
import Rows from './Rows';
import requests from './requests';
import Navbar from './Navbar'
import Banner from './Banner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Banner/>
        <Routes>
          <Route exact path='/home' element={<Rows title="TRENDING" fetchUrl={requests.fetchTrending} />} />
          <Route exact path='/netflixoriginals' element={<Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />} />
          <Route exact path='/toprated' element={<Rows title="TOP RATED SHOWS" fetchUrl={requests.fetchTopRated} />} />
          <Route exact path='/romanticshows' element={<Rows title="ROMANIC SHOWS" fetchUrl={requests.fetchRomanceMovies} />} />
          <Route exact path='/horrorshows' element={<Rows title="HORROR SHOWS" fetchUrl={requests.fetchHorrorMovies} />} />
          <Route exact path='/comedyshows' element={<Rows title="COMEDY SHOWS" fetchUrl={requests.fetchComedyMovies} />} />
          <Route exact path='/actionshows' element={<Rows title="ACTION SHOWS" fetchUrl={requests.fetchActionMovies} />} />
          <Route exact path='/documentaries' element={<Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumantaries} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
