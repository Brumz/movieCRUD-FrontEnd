import React, { Component } from "react";
import "./App.css";
import HomePageHeader from "./components/HomePageHeader";
import BodyHomePage from "./components/BodyHomePage";

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
      <div className="App">
        <HomePageHeader />
        <BodyHomePage movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
