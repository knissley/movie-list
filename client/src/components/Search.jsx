import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  onSearchInput(searchString) {
    this.setState({
      query: searchString
    })
    console.log(this.state.query);
  }

  handleSearchSubmit(search) {
    this.props.handleMovieSearchSubmit(search);
  }


  render() {
    return (
      <div className="search-bar">
        <input
          className="search-field"
          type="text"
          placeholder="Search..."
          onChange={ (e) => {
            this.onSearchInput(e.target.value)
          }}
          />
        <button
          className="search-btn"
          onClick={ (e) => {
            e.preventDefault();
            this.handleSearchSubmit(this.state.query);
          }}>
          <span>Go!</span>
        </button>
        <button
         className="reset-btn"
        >
          <span>Reset</span>
        </button>
      </div>
    )
  }
};


export default Search;

// const Search = ( { handleMovieSearchSubmit } ) => {


//   return (
//     <div className="search-bar">
//       <input
//         className="search-field"
//         type="text"
//         placeholder="Search..."
//       />
//       <button
//         className="search-btn"
//         onSubmit={ (e) => {
//           e.preventDefault();
//           handleMovieSearchSubmit('');
//         }}
//       >
//         <span>Go!</span>
//       </button>
//     </div>
//   )
// };