import React, { Component } from "react";
import "../App.css";

class HomePageHeader extends Component {
  render() {
    return (
      <nav className="navBar">
        <a>Ben's Movie Ratings</a>
        <a>See if you opinions are correct!</a>
      </nav>
    );
  }
}

export default HomePageHeader;
