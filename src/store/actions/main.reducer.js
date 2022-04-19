import { ADD_FAVORIES, REMOVE_FAVORIES } from "../types";

export const AddFavories = () => {
  return {
    type: ADD_FAVORIES,
  };
};

export const RemoveFavories = () => {
  return {
    type: REMOVE_FAVORIES,
  };
};
