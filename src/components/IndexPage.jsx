import React, { Component } from "react";
import HomePageHeader from "./HomePageHeader";
import { Link } from "react-router-dom";

const IndexPage = props => {
  const movies = props.movies.map(movie => {
    return (
      <div className="movieList">
        <div className="movieTitle">
          <h2>{movie.title}</h2>
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
      </div>
    );
  });
  return (
    <div className="displayMovies">
      <HomePageHeader />
      <div className="newBtn">
        <Link to="/add">
          <button className="newMovie">New Movie</button>
        </Link>
      </div>
      <div className="table">
        <h3>Title: </h3>
        <h3>Director: </h3>
        <h3>Year: </h3>
        <h3>Rating: </h3>
      </div>
      <div className="movies">{movies}</div>
    </div>
  );
};

export default IndexPage;
