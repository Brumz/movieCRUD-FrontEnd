import React, { Component } from "react";
import "../App.css";

class BodyHomePage extends Component {
  render() {
    const movies = this.props.movies.map(movie => {
      return (
        <li>
          {movie.title} {movie.poster}
        </li>
      );
    });
    return (
      <div className="bodyHome">
        <div className="movieLi">{movies}</div>
      </div>
    );
  }
}

export default BodyHomePage;
