import React from 'react';
import movieData from '../data/movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchQuery: ''
    }

    // this.filterMovieListBySearch.bind(this);
  }


  //functions
  handleMovieAddSubmit(movieTitle) {
    const newMovie = {
      title: movieTitle,
      isWatched: false
    }

    const allMovies = this.state.movies;
    //functionality to avoid duplicate movies
    allMovies.push(newMovie);

    this.setState({
      movies: allMovies
    })

  }

  handleMovieSearchSubmit(query) {
    // watched boolean state in app
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
      searchQuery: query
    });
  }

  filterMovieListBySearch() {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.includes(this.state.searchQuery);
    })
    return filteredMovies;
  }

  //pass state fed through a function to movielist

  //render
  render() {
    return (
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="header">MovieList</h1>
        </div>
        <AddMovie handleMovieAddSubmit={this.handleMovieAddSubmit.bind(this)} />
        <Search handleMovieSearchSubmit={this.handleMovieSearchSubmit.bind(this)} />
        <MovieList getMovies={this.filterMovieListBySearch.bind(this)} />
      </div>
    );
  }
}

export default App;