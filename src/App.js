import React, { Component } from "react";
import axios from "axios";
import Splash from "./components/Splash";
import Interface from "./components/Interface";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  state = { screenMode: 0 };

  async componentDidMount() {
    const { data: characters } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ characters });

    setTimeout(() => {
      this.setState({ screenMode: 1 });
    }, 500);
  }

  onLike = (quote) => {
    const characters = [...this.state.characters];

    //find the index at the current moment
    const indexOf = characters.findIndex((item) => item.quote === quote);
    console.log(indexOf);

    characters[indexOf].liked = !characters[indexOf].liked;

    this.setState({ characters });
  };

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

    this.setState({ ...copy, character: "", quote: "" });
  };

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.screenMode === 0) {
      return <Splash />;
    }

    let { characters } = this.state;

    if (!this.state.characters) return <p>Loading...</p>;

    //work out how many are liked
    let count = 0;
    this.state.characters.forEach((item) => {
      if (item.liked) {
        count++;
      }
    });

    if (this.props.searchInput) {
      characters = characters.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.props.searchInput.toLowerCase().trim());
      });
    }

    return (
      <>
        <Interface
          onInput={this.onInput}
          onDelete={this.onDelete}
          characters={characters}
          onAdd={this.onAdd}
          onLike={this.onLike}
          count={count}
          quote={this.state.quote}
          character={this.state.character}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { searchInput: state.searchInput };
}

export default connect(mapStateToProps)(App);
