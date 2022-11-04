import React, { Component } from "react";
import Character from "./Character";
import SortSelection from "./SortSelection";

class Characters extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ sortSelection: Number(e.target.value) });
  };

  sort = (copy) => {
    switch (this.state.sortSelection) {
      case 1:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.character > secondItem.character) return 1;
          if (firstItem.character < secondItem.character) return -1;
          return 0;
        });
        break;

      case 2:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.character < secondItem.character) return 1;
          if (firstItem.character > secondItem.character) return -1;
          return 0;
        });
        break;

      case 3:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.quote > secondItem.quote) return 1;
          if (firstItem.quote < secondItem.quote) return -1;
          return 0;
        });
        break;

      case 4:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.quote < secondItem.quote) return 1;
          if (firstItem.quote > secondItem.quote) return -1;
          return 0;
        });
        break;

      default:
        break;
    }
  };

  render() {
    const { characters, onDelete, onLike } = this.props;

    //make a copy of the original state
    const copy = [...characters];
    this.sort(copy);

    return (
      <>
        <SortSelection onInput={this.onInput} />
        {copy.map((character, index) => (
          <Character
            character={character}
            onDelete={onDelete}
            onLike={onLike}
            index={index}
          />
        ))}
      </>
    );
  }
}

export default Characters;
