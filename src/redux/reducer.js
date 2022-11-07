import { initialState } from "./initialState";
import { SET_SEARCH_INPUT } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };

    default:
      return state;
  }
}
