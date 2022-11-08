import React, { Component } from "react";
import Character from "./Character";
import SortSelection from "./SortSelection";
import { connect } from "react-redux";

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
    const { characters } = this.props; //never change props

    //make a copy of the original state
    let copy = [...characters];
    this.sort(copy);

    let count = 0;
    this.props.characters.forEach((item) => {
      if (item.liked) {
        count++;
      }
    });

    if (this.props.searchInput) {
      copy = copy.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.props.searchInput.toLowerCase().trim());
      });
    }

    return (
      <>
        <h1>Total no of chars liked: {count}</h1>
        <SortSelection onInput={this.onInput} />
        {copy.map((character, index) => (
          <Character key={index} character={character} index={index} />
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return { characters: state.characters, searchInput: state.searchInput };
}

export default connect(mapStateToProps)(Characters);
