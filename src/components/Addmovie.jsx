import React, { Component } from "react";
import HomePageHeader from "./HomePageHeader";
import { Link } from "react-router-dom";

const Addmovie = () => {
  return (
    <div>
      <HomePageHeader />
      <div className="form">
        <h1> Add Movie </h1>
        <form className="formIn">
          <label>
            Title <input type="text" name="title" />
          </label>
          <label>
            Director <input type="text" name="director" />
          </label>
          <label>
            Year <input type="text" name="year" />
          </label>
          <label>
            Rating <input type="text" name="rating" />
          </label>
          <label>
            Poster URL <input type="text" name="poster" />
          </label>
          <button className="addMovieBtn"> Add Movie </button>
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
