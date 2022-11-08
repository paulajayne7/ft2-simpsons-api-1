import { initialState } from "./initialState";
import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  LIKE_CHARACTER,
  SET_API_DATA,
  SET_SCREEN_MODE,
  SET_USER_INPUT,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA:
      return { ...state, characters: action.payload };

    case SET_USER_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case ADD_CHARACTER:
      const characters = [...state.characters];

      characters.push({
        character: state.newCharacterInput,
        quote: state.newQuoteInput,
        image: "",
        characterDirection: "Right",
      });

      return { ...state, characters };

    case DELETE_CHARACTER: {
      const indexOf = state.characters.findIndex((item) => {
        return item.quote === action.payload;
      });

      const characters = [...state.characters];

      characters.splice(indexOf, 1);

      return { ...state, characters };
    }

    case LIKE_CHARACTER: {
      const indexOf = state.characters.findIndex((item) => {
        return item.quote === action.payload;
      });

      const characters = [...state.characters];

      characters[indexOf].liked = !characters[indexOf].liked;

      return { ...state, characters };
    }

    case SET_SCREEN_MODE: {
      return { ...state, screenMode: action.payload };
    }

    default:
      return state;
  }
}
