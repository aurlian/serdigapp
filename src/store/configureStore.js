import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/ui";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
