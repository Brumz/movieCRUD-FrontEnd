import React, { Component } from "react";
import "../App.css";
import HomePageHeader from "./HomePageHeader";
import { Link } from "react-router-dom";

class BodyHomePage extends Component {
  render() {
    return (
      <div>
        <HomePageHeader />
        <div className="bodyHome">
          <div className="moviesLink">
            <Link to="/movies">
              <button className="movieBtn" onClick={this.props.movies}>
                Go To Movies
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyHomePage;
