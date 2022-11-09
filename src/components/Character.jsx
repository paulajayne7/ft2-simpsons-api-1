import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import { DELETE_CHARACTER, LIKE_CHARACTER } from "../redux/types";
import { useDispatch } from "react-redux";

const Character = ({ character }) => {
  const dispatch = useDispatch();

  const {
    image,
    character: name,
    quote,
    characterDirection,
    liked,
  } = character;

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
            onClick={() => dispatch({ type: DELETE_CHARACTER, payload: quote })}
          >
            Delete
          </button>
        </div>
        <div>
          <button
            className={liked ? "liked" : "notLiked"}
            onClick={() => {
              dispatch({ type: LIKE_CHARACTER, payload: quote });
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
          onClick={() => dispatch({ type: DELETE_CHARACTER, payload: quote })}
        >
          Delete
        </button>
      </div>
      <div>
        <button
          className={liked ? "liked" : "notLiked"}
          onClick={() => {
            dispatch({ type: LIKE_CHARACTER, payload: quote });
          }}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default Character;
