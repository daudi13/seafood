/* eslint linebreak-style: ["error", "windows"] */
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('render App correctly', () => {
  test('render', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
