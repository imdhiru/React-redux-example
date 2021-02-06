import { combineReducers } from "redux";

import userReducer from "./users";
import counterReducer from "./counter";

const allReducers = combineReducers({
  userReducer,
  counterReducer
});

export default allReducers;
