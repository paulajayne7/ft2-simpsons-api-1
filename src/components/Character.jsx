import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import { DELETE_CHARACTER, LIKE_CHARACTER } from "../redux/types";
import { connect } from "react-redux";

class Character extends Component {
  render() {
    console.log("Comp re-ran");
    const {
      image,
      character: name,
      quote,
      characterDirection,
      liked,
    } = this.props.character;

    if (characterDirection === "Left") {
      return (
        <div className="characterContainer">
          <div className="item">
            <Name name={name} />
          </div>
          <div className="item">
            <Image image={image} name={name} />
          </div>
          <div className="item">
            <Quote quote={quote} />
          </div>
          <div>
            <button
              onClick={() =>
                this.props.dispatch({ type: DELETE_CHARACTER, payload: quote })
              }
            >
              Delete
            </button>
          </div>
          <div>
            <button
              className={liked ? "liked" : "notLiked"}
              onClick={() => {
                this.props.dispatch({ type: LIKE_CHARACTER, payload: quote });
              }}
            >
              Like
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="characterContainer">
        <div className="item">
          <Name name={name} />
        </div>
        <div className="item">
          <Quote quote={quote} />
        </div>
        <div className="item">
          <Image image={image} name={name} />
        </div>
        <div>
          <button
            onClick={() =>
              this.props.dispatch({ type: DELETE_CHARACTER, payload: quote })
            }
          >
            Delete
          </button>
        </div>
        <div>
          <button
            className={liked ? "liked" : "notLiked"}
            onClick={() => {
              this.props.dispatch({ type: LIKE_CHARACTER, payload: quote });
            }}
          >
            Like
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { characters: state.characters };
}

export default connect(mapStateToProps)(Character);
