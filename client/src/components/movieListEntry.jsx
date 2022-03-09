import React from 'react';


// const MovieListEntry = ({ movie }) => (
//   <div className="movie-list-entry">
//     <p>{movie.title}</p>
//     <button className="movie-list-btn">
//       <span>Watched</span>
//     </button>
//   </div>
// );


class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    //isWatched is also a property on the movie object itself
    this.state = {
      isWatched: this.props.movie.isWatched
    }
  }

  handleWatchedButtonClick() {
    this.setState({
      isWatched: !this.state.isWatched
    })
  }

  render() {

    let style = {
      backgroundColor: this.state.isWatched ? 'green' : 'grey'
      // color: this.state.isWatched ? 'white' : 'black'
    };

    return (
      <div className="movie-list-entry">
        <p>{this.props.movie.title}</p>
        <button
          className="movie-list-btn"
          style={style}
          onClick={this.handleWatchedButtonClick.bind(this)}
        >
          <span>Watched</span>
        </button>
      </div>
    )
  }
}



export default MovieListEntry;