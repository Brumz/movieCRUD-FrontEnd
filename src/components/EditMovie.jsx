import React from "react";
import "../App.css";

const EditMovie = props => {
  const movieSelected = props.movies.map(movie => {
    if (movie.id === props.selected) {
      return (
        <div>
          <img src={movie.poster} />
        </div>
      );
    }
  });
  return <div>{movieSelected}</div>;
};

export default EditMovie;
