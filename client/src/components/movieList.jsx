import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';


// const MovieList = ({ getMovies }) => {
  //   // const movies = getMovies();
  //   // console.log(getMovies);
  //   // console.log(getMovies());

  //   return (
    //   <div className="movie-list">
    //     {getMovies().map((movie) =>
    //       <MovieListEntry movie={movie} key={getMovies().indexOf(movie)} />
    //     )}
    //   </div>
    //   )
    // };

//refactor to class
//hold state of the desired view, default to To Watch?
//when a button is clicked, change the state to the corresponding view
//rerender
//but how to persist the isWatched flag from below?

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    //false view will correspond to unwatched, true will be watched movies
    this.state = {
      view: false
    }
  }


  render() {
    return (
      <div className="movie-list">
        <div className="movie-list-btn-container">
          <button
            onClick={() => { this.props.handleViewChange(false); }}
          >
            <span>Unwatched</span>
          </button>
          <button
            onClick={() => { this.props.handleViewChange(true); }}
          >
            <span>Watched</span>
          </button>
        </div>
        {this.props.getMovies().map((movie) =>
          <MovieListEntry movie={movie} key={this.props.getMovies().indexOf(movie)} />
        )}
      </div>
    )
  }
}

//pass in to movie list entry only entries that pass the view test

export default MovieList;