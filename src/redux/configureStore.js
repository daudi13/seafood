import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import FishReducer from './Fish/Fish';

const root = combineReducers({
  fish: FishReducer,
});

const store = createStore(root, applyMiddleware(logger, thunk));
store.dispatch(FishReducer);
export default store;
