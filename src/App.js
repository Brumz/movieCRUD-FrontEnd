import React, { Component } from "react";
import "./App.css";
import HomePageHeader from "./components/HomePageHeader";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <HomePageHeader />
      </div>
    );
  }
}

export default App;
