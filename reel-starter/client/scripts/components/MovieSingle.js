import React, { Component } from 'react';

class MovieSingle extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: "",
      id: "",
      genre: "",
      director: "",
      plot: "",
      posterUrl: "",
      year: 0
    }
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.movieId);
  };

  fetchMovie(movieId) {
    fetch(`/api/movies/${movieId}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(json => this.setState(json))
  }

  render() {
    return (
      <div className="single">
        <h3>All the single movies 👯‍</h3>
        <h1>{ this.state.title }</h1>
        
      </div>
    )
  }
}

export default MovieSingle;