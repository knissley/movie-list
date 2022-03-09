import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';


const MovieList = ({ getMovies }) => {
  // const movies = getMovies();
  // console.log(getMovies);
  // console.log(getMovies());

  return (
  <div className="movie-list">
    {getMovies().map((movie) =>
      <MovieListEntry movie={movie} key={getMovies().indexOf(movie)} />
    )}
  </div>
  )
};

export default MovieList;