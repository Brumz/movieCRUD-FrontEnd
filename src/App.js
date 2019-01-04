import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BodyHomePage from "./components/BodyHomePage";
import IndexPage from "./components/IndexPage";
import Addmovie from "./components/Addmovie";
import EditMovie from "./components/EditMovie";
import MoviePage from "./components/MoviePage";

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
      selected: undefined,
      allInputs: false
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
    })
      .then(res => res.json())
      .then(() => (window.location = "http://localhost:3000/movies"));
  };

  newMovieInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    if (
      this.state.title.length > 0 &&
      this.state.director.length > 0 &&
      this.state.year > 0
    ) {
      this.setState({ allInputs: true });
    }
  };

  deleteMovie = e => {
    fetch(`https://movie-crud-project.herokuapp.com/movies/${e.target.id}`, {
      method: "DELETE"
    }).then(() => this.reload());
  };

  movieSelected = e => {
    this.setState({ selected: e.target.id });
  };
  reload = () => {
    fetch("https://movie-crud-project.herokuapp.com/movies")
      .then(res => res.json())
      .then(res =>
        this.setState({
          movies: res,
          title: "",
          director: "",
          year: undefined,
          rating: undefined,
          poster: "",
          selected: undefined
        })
      );
  };
  editMovie = e => {
    if (this.state.allInputs === false) {
      e.preventDefault();
      alert("Please fill out all fields");
    } else {
      e.preventDefault();
      const updatedMovie = {
        title: this.state.title,
        director: this.state.director,
        year: this.state.year,
        rating: this.state.rating,
        poster_url: this.state.poster_url
      };

      fetch(`https://movie-crud-project.herokuapp.com/movies/${e.target.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMovie)
      })
        .then(res => res.json())
        .then(() => this.reload())
        .then(
          () => (window.location = "http://http://rumz-imdb.surge.sh/movies")
        );
    }
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
                  editMovie={this.editMovie}
                  new={this.newMovieInput}
                />
              )}
            />
            <Route
              path="/moviepage"
              render={() => (
                <MoviePage
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
