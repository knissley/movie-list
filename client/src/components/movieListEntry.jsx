import React from 'react';


const MovieListEntry = ({ movie }) => (
  <div className="movie-list-entry">
    <p>{movie.title}</p>
    <button className="movie-list-btn">
      <span>Watched</span>
    </button>
  </div>
);


export default MovieListEntry;