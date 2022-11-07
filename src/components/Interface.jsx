import React, { Component } from "react";
import Characters from "./Characters";
import { connect } from "react-redux";
import { SET_SEARCH_INPUT } from "../redux/types";

class Interface extends Component {
  render() {
    return (
      <>
        <div onInput={this.props.onInput}>
          <input value={this.props.character} type="text" name="character" />
          <input value={this.props.quote} type="text" name="quote" />
          <button onClick={this.props.onAdd}>Add</button>
        </div>
        <div
          onInput={(e) => {
            this.props.dispatch({
              type: SET_SEARCH_INPUT,
              payload: e.target.value,
            });
          }}
        >
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

export default connect()(Interface);
