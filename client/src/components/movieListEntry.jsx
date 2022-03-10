import React from 'react';
import MovieEntryDropdown from './MovieEntryDropdown.jsx';


// const MovieListEntry = ({ movie }) => (
//   <div className="movie-list-entry">
//     <p>{movie.title}</p>
//     <button className="movie-list-btn">
//       <span>Watched</span>
//     </button>
//   </div>
// );

//dropdown panel could be a div that by default doesn't show (takes up size of its contents) but does get rendered if the state changes to where the entry is selected??

//always have a filled out dropdown panel but the display is none while the movie isn't selected and changes to block when the movie is clicked

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    //isWatched is also a property on the movie object itself
    this.state = {
      isWatched: this.props.movie.isWatched,
      isSelected: false
    }
  }

  handleWatchedButtonClick() {
    this.props.movie.isWatched = !this.props.movie.isWatched;
    this.setState({
      isWatched: !this.state.isWatched
    })
    console.log(this.props.movie);
  }

  handleEntrySelect() {
    this.props.movie.isSelected = !this.props.movie.isSelected;
    this.setState({
      isSelected: !this.state.isSelected
    })
    console.log(this.state.isSelected);
  }

  render() {

    let style = {
      backgroundColor: this.props.movie.isWatched ? 'green' : 'grey'
      // color: this.state.isWatched ? 'white' : 'black'
    };

    let selectStyle = {
      backgroundColor: this.props.movie.isSelected ? 'green' : 'lightgrey'
    }

    // let panelStyle = {
    //   display: this.state.isSelected ? : 'block'
    // }

    let isSelected = this.props.movie.isSelected;

    let panel;

    if (isSelected) {
      panel = <MovieEntryDropdown movie={this.props.movie} />
    }

    return (
      <div
       className="movie-list-entry"
       onClick={this.handleEntrySelect.bind(this)}
      >
        <div className="movie-entry-top" style={selectStyle}>
          <p>{this.props.movie.title}</p>
          <button
            className="movie-list-btn"
            style={style}
            onClick={this.handleWatchedButtonClick.bind(this)}
          >
            <span>Watched</span>
          </button>
        </div>
        {panel}
      </div>
    )
  }
}


export default MovieListEntry;