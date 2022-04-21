import { ADD_FAVORITES, REMOVE_FAVORITES } from "../types";

export const addFavorites = (item) => {
  return {
    type: ADD_FAVORITES,
    payload: item,
  };
};

export const removeFavorites = (item) => {
  return {
    type: REMOVE_FAVORITES,
    payload: item,
  };
};
