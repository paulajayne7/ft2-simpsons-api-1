import React, { Component } from "react";
import { ADD_CHARACTER, SET_USER_INPUT } from "../redux/types";
import { connect } from "react-redux";

class Controls extends Component {
  render() {
    return (
      <>
        <div
          onInput={(e) => {
            this.props.dispatch({
              type: SET_USER_INPUT,
              payload: { name: e.target.name, value: e.target.value },
            });
          }}
        >
          <input type="text" name="newCharacterInput" />
          <input type="text" name="newQuoteInput" />
          <button
            onClick={() => {
              this.props.dispatch({ type: ADD_CHARACTER });
            }}
          >
            Add
          </button>
        </div>
        <div
          onInput={(e) => {
            this.props.dispatch({
              type: SET_USER_INPUT,
              payload: { name: e.target.name, value: e.target.value },
            });
          }}
        >
          <h1>Search</h1>
          <input type="text" name="searchInput" />
        </div>
      </>
    );
  }
}

export default connect()(Controls);
