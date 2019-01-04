import React from "react";
import "../App.css";
import HomePageHeader from "./HomePageHeader";

const EditMovie = props => {
  const movieSelected = props.movies.map(movie => {
    if (movie.id == props.selected) {
      return (
        <div>
          <HomePageHeader />
          <div>
            <div className="form">
              <img className="editPoster" src={movie.poster} alt="poster" />
              <h1> Edit Movie </h1>
              <form className="formIn" onSubmit={props.editMovie} id={movie.id}>
                <label>
                  Title{" "}
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={props.new}
                  />
                </label>
                <label>
                  Director
                  <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    onChange={props.new}
                  />
                </label>
                <label>
                  Year{" "}
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    onChange={props.new}
                  />
                </label>
                <label>
                  Rating
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating 1-5"
                    onChange={props.new}
                  />
                </label>
                <label>
                  Poster URL{" "}
                  <input
                    type="text"
                    name="poster"
                    placeholder="Url"
                    onChange={props.new}
                  />
                </label>
                <button className="addMovieBtn"> Edit Movie </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div>{movieSelected}</div>;
};

export default EditMovie;
