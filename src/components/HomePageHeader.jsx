import React from "react";
import "../App.css";

const HomePageHeader = () => {
  return (
    <nav className="navBar">
      <a href="/" className="homeLink">
        Ben's Movie Ratings
      </a>
      <a href="/movies" className="moviesLink">
        See if you opinions are correct!
      </a>
    </nav>
  );
};

export default HomePageHeader;
