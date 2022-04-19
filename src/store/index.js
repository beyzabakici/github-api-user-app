import { createStore, combineReducers } from "redux";

import mainReducer from "./reducers/main.reducer";

const reducers = combineReducers({
  mainReducer,
});

const store = createStore(reducers);

export default store;
