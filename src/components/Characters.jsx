import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters, onDelete } = this.props;

    return characters.map((character) => (
      <Character character={character} onDelete={onDelete} />
    ));
  }
}

export default Characters;
