import React from 'react';

const MovieEntryDropdown = ( {movie} ) => {
  let watchedStatus;

  if (movie.isWatched) {
    watchedStatus = 'true';
  } else {
    watchedStatus = 'false';
  }

  return (
    <div className="movie-dropdown-panel">
      <div className="movie-dropdown-info">
        <p>Year: <span>{ movie.releaseYear }</span></p>
        <p>Runtime: <span>{ movie.runtime }</span></p>
        <p>Metascore: <span>{ movie.metascore }</span></p>
        <p>ImdbRating: <span>{ movie.imdbRating }</span></p>
        <p>Watched: <span>{ watchedStatus }</span></p>
      </div>
      <div className="movie-dropdown-photo">
        <img src={ movie.posterUrl } alt=""/>
      </div>
    </div>
  )
};

export default MovieEntryDropdown;