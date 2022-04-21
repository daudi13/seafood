/* eslint linebreak-style: ["error", "windows"] */
import { cleanup } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import FishReducer, { getFishRequest } from '../../../redux/Fish/Fish';

const initialState = {
  loading: false,
  fishArray: [],
  error: '',
};

const store = createStore(
  FishReducer,
  applyMiddleware(thunk),
);

describe('FishReducer', () => {
  describe('getFish actions', () => {
    afterEach(cleanup);

    it('should return the exact initial state', () => {
      expect(store.getState()).toEqual(initialState);
    });

    it('should return loading key in the intial state to be true', () => {
      store.dispatch(getFishRequest());
      expect(store.getState().loading).toBeTruthy();
    });
  });
});
