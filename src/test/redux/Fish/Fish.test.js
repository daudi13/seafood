/* eslint linebreak-style: ["error", "windows"] */
import { cleanup } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import FishReducer from '../../../redux/Fish/Fish';

const initialState = {
  loading: false,
  fishArray: [],
  error: '',
};

describe('FishReducer', () => {
  describe('getFish actions', () => {
    afterEach(cleanup);

    it('should return the exact initial state', () => {
      const store = createStore(
        FishReducer,
        applyMiddleware(thunk),
      );

      expect(store.getState()).toEqual(initialState);
    });
  });
});
