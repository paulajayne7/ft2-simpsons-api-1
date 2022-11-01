import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters.jsx";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data: characters } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;

    if (!this.state.characters) return <p>Loading...</p>;

    return <Characters characters={characters} />;
  }
}

export default App;
