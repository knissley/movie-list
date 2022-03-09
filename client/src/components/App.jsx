import React from 'react';
import movieData from '../data/movieData.js';
import MovieList from './movoeiList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }
  }

  //functions



  //render
  render() {
    return (
    <div class="nav-bar">
      <h1 class="header">MovieList</h1>
    </div>
    <MovieList movies={movieData}/>
    );
  }
}

export default App;