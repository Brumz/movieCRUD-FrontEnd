import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BodyHomePage from "./components/BodyHomePage";
import IndexPage from "./components/IndexPage";
import Addmovie from "./components/Addmovie";
import EditMovie from "./components/EditMovie";

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      movies: [],
      title: "",
      director: "",
      year: undefined,
      rating: undefined,
      poster: "",
      selected: 0
    };
  }

  async componentDidMount() {
    let response = await fetch(
      "https://movie-crud-project.herokuapp.com/movies"
    );
    let myJson = await response.json();
    this.setState({
      movies: myJson
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newMovie = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      rating: this.state.rating,
      poster: this.state.poster
    };
    fetch("https://movie-crud-project.herokuapp.com/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMovie)
    });
  };

  newMovieInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  deleteMovie = e => {
    fetch(`https://movie-crud-project.herokuapp.com/movies/${e.target.id}`, {
      method: "DELETE"
    });
  };

  movieSelected = e => {
    this.setState({ selected: e.target.id });
  };

  render() {
    return (
      <>
        <div className="App" />
        <BrowserRouter>
          <div className="routes">
            <Route
              path="/"
              exact
              render={() => <BodyHomePage movies={this.state.movies} />}
            />
            <Route
              path="/movies"
              render={() => (
                <IndexPage
                  movies={this.state.movies}
                  deleteMovie={this.deleteMovie}
                  movieSelected={this.movieSelected}
                />
              )}
            />
            <Route
              path="/add"
              render={() => (
                <Addmovie
                  newMovieInput={this.newMovieInput}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route
              path="/edit"
              render={() => (
                <EditMovie
                  movies={this.state.movies}
                  selected={this.state.selected}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
