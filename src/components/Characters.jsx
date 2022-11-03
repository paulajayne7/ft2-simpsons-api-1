import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters, onDelete, onLike } = this.props;

    const copy = [...characters];
    copy.reverse();

    return copy.map((character, index) => (
      <Character
        character={character}
        onDelete={onDelete}
        onLike={onLike}
        index={index}
      />
    ));
  }
}

export default Characters;
