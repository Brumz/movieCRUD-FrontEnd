import React, { Component } from "react";
import { Link } from "react-router-dom";

const IndexPage = props => {
  const movies = props.movies.map(movie => {
    return (
      <div>
        <div className="movieTitle">
          <h1>{movie.title}</h1>
        </div>
        <div className="movieDirector">
          <h3>{movie.director}</h3>
        </div>
        <div className="movieYear">
          <h3>{movie.year}</h3>
        </div>
        <div className="movieRating">
          <h3>{movie.rating}</h3>
        </div>
        <div className="moviePoster">
          <img src={movie.poster} alt="movie" />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <h3>Title: </h3>
        <h3>Director: </h3>
      </div>
      <div>{movies}</div>
    </div>
  );
};

export default IndexPage;
