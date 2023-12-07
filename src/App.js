import React, { useState, useEffect } from 'react';
import MovieCard from './movieCard';
import searchIcon from "./search (1).png";
import './App.css';

// e47508c1
const API_URL = 'http://www.omdbapi.com?apikey=e47508c1';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('Superman');
  }, []); // Pass an empty dependency array
  // const handleInputChange = (event) => {
  //   // Handle input change here if needed
  // };
  // const handleSearchClick = () => {
  //   // Handle search click here if needed
  // };
  return (
    <div className='app'>
      <h1>Movie Hub</h1>
      <div className='search'>
        <input
          placeholder='Search movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
