import React from "react";
import HomePageHeader from "./HomePageHeader";
import { Link } from "react-router-dom";

const IndexPage = props => {
  const movies = props.movies.map(movie => {
    return (
      <div id={movie.id}>
        <div className="movieList">
          <div className="movieTitle">
            <h2> Title:</h2>
            <Link to="/moviepage">
              <h3 onClick={props.movieSelected} id={movie.id}>
                {movie.title}
              </h3>
            </Link>
          </div>
          <div className="movieDirector">
            <h2>Director:</h2> <h3>{movie.director}</h3>
          </div>
          <div className="movieYear">
            <h2>Year:</h2> <h3>{movie.year}</h3>
          </div>
          <div className="movieRating">
            <h2>Rating:</h2> <h3>{movie.rating}</h3>
          </div>
          <div>
            <img className="moviePoster" src={movie.poster} alt="poster" />
          </div>
          <div className="Btns">
            <button
              className="deleteBtn"
              id={movie.id}
              onClick={props.deleteMovie}
            >
              Delete Movie
            </button>
            <Link to="/edit">
              <button className="editBtn">Edit Movie</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="displayMovies">
      <HomePageHeader />
      <div className="newBtn">
        <Link to="/add">
          <button className="newMovie">Add Movie</button>
        </Link>
      </div>
      <div className="movies">{movies}</div>
    </div>
  );
};

export default IndexPage;
