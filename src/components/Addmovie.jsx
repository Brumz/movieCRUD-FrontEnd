import React, { Component } from "react";
import HomePageHeader from "./HomePageHeader";
import { Link } from "react-router-dom";

const Addmovie = props => {
  return (
    <div>
      <HomePageHeader />
      <div className="form">
        <h1> Add Movie </h1>
        <form className="formIn" onSubmit={props.handleSubmit}>
          <label>
            Title{" "}
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={props.newMovieInput}
            />
          </label>
          <label>
            Director
            <input
              type="text"
              name="director"
              placeholder="Director"
              onChange={props.newMovieInput}
            />
          </label>
          <label>
            Year{" "}
            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={props.newMovieInput}
            />
          </label>
          <label>
            Rating
            <input
              type="number"
              name="rating"
              placeholder="Rating 1-5"
              onChange={props.newMovieInput}
            />
          </label>
          <label>
            Poster URL{" "}
            <input
              type="text"
              name="poster"
              placeholder="Url"
              onChange={props.newMovieInput}
            />
          </label>
          <button className="addMovieBtn"> Add Movie </button>
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
