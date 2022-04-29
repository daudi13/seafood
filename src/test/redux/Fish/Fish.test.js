/* eslint linebreak-style: ["error", "windows"] */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import FishReducer, { getFishFail, getFishRequest, getFishSuccess } from '../../../redux/Fish/Fish';

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
    it('should return the exact initial state', () => {
      expect(store.getState()).toEqual(initialState);
    });

    it('should return loading key in the intial state to be true', () => {
      store.dispatch(getFishRequest());
      expect(store.getState().loading).toBeTruthy();
    });

    it('should return an error', () => {
      const newError = 'Check Endpoint then try again';
      store.dispatch(getFishFail(newError));
      expect(store.getState().error).toEqual(newError);
    });

    it('should return item in the fishArray', () => {
      const newFishArrayData = [{
        id: 112,
        name: 'lion',
        diet: 'meat',
      }];
      store.dispatch(getFishSuccess(newFishArrayData));
      expect(store.getState().fishArray).toEqual(newFishArrayData);
    });
  });
});
