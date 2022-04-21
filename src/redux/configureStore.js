/* eslint linebreak-style: ["error", "windows"] */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import FishReducer from './Fish/Fish';

const root = combineReducers({
  fish: FishReducer,
});

const store = createStore(root, applyMiddleware(thunk));
export default store;
