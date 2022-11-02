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

  onDelete = (quote) => {
    const indexOf = this.state.characters.findIndex((item) => {
      return item.quote === quote;
    });

    const copy = { ...this.state };
    copy.characters.splice(indexOf, 1);
    this.setState({ ...copy });
  };

  onAdd = () => {
    const indexOf = this.state.characters.findIndex(
      (item) => item.quote === this.state.quote
    );

    if (indexOf > -1) {
      return;
    }

    const copy = { ...this.state };
    copy.characters.unshift({
      character: this.state.character,
      quote: this.state.quote,
      image: "",
      characterDirection: "Right",
    });
    this.setState({ ...copy });
  };

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { characters } = this.state;

    if (!this.state.characters) return <p>Loading...</p>;

    if (this.state.search) {
      characters = characters.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.state.search.toLowerCase().trim());
      });
    }

    return (
      <>
        <div onInput={this.onInput}>
          <input type="text" name="character" />
          <input type="text" name="quote" />
          <button onClick={this.onAdd}>Add</button>
        </div>
        <div onInput={this.onInput}>
          <h1>Search</h1>
          <input type="text" name="search" />
        </div>

        <Characters onDelete={this.onDelete} characters={characters} />
      </>
    );
  }
}

export default App;
