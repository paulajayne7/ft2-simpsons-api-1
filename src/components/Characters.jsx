import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters } = this.props;

    return characters.map((character) => <Character character={character} />);
  }
}

export default Characters;
