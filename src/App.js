import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BodyHomePage from "./components/BodyHomePage";
import IndexPage from "./components/IndexPage";
import Addmovie from "./components/Addmovie";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
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
              render={() => <IndexPage movies={this.state.movies} />}
            />
            <Route path="/add" render={() => <Addmovie />} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
