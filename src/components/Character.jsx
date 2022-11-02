import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  render() {
    const {
      image,
      character: name,
      quote,
      characterDirection,
    } = this.props.character;

    if (characterDirection === "Left") {
      return (
        <div class="characterContainer">
          <div class="item">
            <Name name={name} />
          </div>
          <div class="item">
            <Image image={image} name={name} />
          </div>
          <div class="item">
            <Quote quote={quote} />
          </div>
          <div>
            <button onClick={() => this.props.onDelete(quote)}>Delete</button>
          </div>
        </div>
      );
    }

    return (
      <div class="characterContainer">
        <div class="item">
          <Name name={name} />
        </div>
        <div class="item">
          <Quote quote={quote} />
        </div>
        <div class="item">
          <Image image={image} name={name} />
        </div>
        <div>
          <button onClick={() => this.props.onDelete(quote)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Character;
