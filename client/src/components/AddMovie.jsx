import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleInputFill(input) {
    this.setState({
      value: input
    })
  }

  handleInputSubmit(input) {
    this.props.handleMovieAddSubmit(input);
  }


  render() {
    return (
      <div>
        <input
          type="text"
          className="add-movie-input"
          placeholder="Add movie title here"
          onChange={ (e) => {
            e.preventDefault();
            this.handleInputFill(e.target.value);
          }}
        />
        <button
          className="add-movie-btn"
          onClick={ () => {
            this.handleInputSubmit(this.state.value);
          }}
        >
          <span>Add</span>
        </button>
      </div>
    )
  }
}


export default AddMovie;