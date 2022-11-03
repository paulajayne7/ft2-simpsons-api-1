import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  render() {
    return (
      <>
        <div onInput={this.props.onInput}>
          <input type="text" name="character" />
          <input type="text" name="quote" />
          <button onClick={this.props.onAdd}>Add</button>
        </div>
        <div onInput={this.props.onInput}>
          <h1>Search</h1>
          <input type="text" name="search" />
        </div>

        <h1>Total no of chars liked: {this.props.count}</h1>

        <Characters
          onDelete={this.props.onDelete}
          characters={this.props.characters}
          onLike={this.props.onLike}
        />
      </>
    );
  }
}

export default Interface;
