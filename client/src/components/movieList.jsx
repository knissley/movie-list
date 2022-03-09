import MovieListEntry from './movieListEntry.js';

const MovieList = ({ movies }) => (
  <div class="movie-list">
    {movies.map( (movie) =>
      <MovieListEntry movie={movie} />
    )}
  </div>
)