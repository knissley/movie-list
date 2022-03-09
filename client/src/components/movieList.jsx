import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';


const MovieList = ({ movies }) => {


  return (
  <div className="movie-list">
    {movies.map((movie) =>
      <MovieListEntry movie={movie} key={movies.indexOf(movie)} />
    )}
  </div>
  )
};

export default MovieList;