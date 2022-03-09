import React from 'react';
import movieData from '../data/movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  //functions

  handleMovieAddSubmit(movieTitle) {
    const newMovie = {
      title: movieTitle
    }

    const allMovies = this.state.movies;
    allMovies.push(newMovie);

    this.setState({
      movies: allMovies
    })

  }

  handleMovieSearchSubmit(query) {
    // event.preventDefault();
    let searchQuery = query.toLowerCase();
    const currentMovies = this.state.movies;
    const matchingMovies = currentMovies.filter( (movie) => {
      return movie.title.toLowerCase().includes(searchQuery);
    });
    if (matchingMovies.length === 0) {
      matchingMovies.push('No movie by that name found');
    }
    this.setState({
      movies: matchingMovies
    });
  }


  //render
  render() {
    return (
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="header">MovieList</h1>
        </div>
        <AddMovie handleMovieAddSubmit={this.handleMovieAddSubmit.bind(this)} />
        <Search handleMovieSearchSubmit={this.handleMovieSearchSubmit.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;