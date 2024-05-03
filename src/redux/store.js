import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import jobsReducer from "./reducers/jobsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
