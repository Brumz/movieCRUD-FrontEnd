import React from "react";
import "../App.css";

const MoviePage = props => {
  const movieSelected = props.movies.map(movie => {
    if (movie.id == props.selected) {
      return (
        <div>
          <h1>{movie.title}</h1>
          <img className="moviePosterSingle" src={movie.poster} alt="poster" />
          <h2>Title: {movie.title}</h2>
          <h2>Director: {movie.director}</h2>
          <h2>Year: {movie.year}</h2>
          <h2>Rating: {movie.rating}</h2>
        </div>
      );
    }
  });
  return <div className="movieSelected">{movieSelected}</div>;
};

export default MoviePage;
