import { ADD_FAVORITES, REMOVE_FAVORITES } from "../types";

const INITIAL_STATE = {
  favorites: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        favorites: state.favorites.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
