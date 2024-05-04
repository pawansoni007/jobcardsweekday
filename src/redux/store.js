import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import jobsReducer from "./reducers/jobsReducer";
import filtersReducer from "./reducers/filtersReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  filters: filtersReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
