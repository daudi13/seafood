/* eslint linebreak-style: ["error", "windows"] */
import FishReducer from '../../../redux/Fish/Fish';

const initialState = {
  loading: false,
  fishArray: [],
  error: '',
};

describe('Testing fish type reducer', () => {
  test('should return initial state', () => {
    expect(FishReducer(undefined, {})).toStrictEqual(initialState);
  });

  test('should return items passed in action', () => {
    expect()
  })
});
