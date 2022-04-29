/* eslint linebreak-style: ["error", "windows"] */
import { render } from '@testing-library/react';
import FishCard from '../../components/Fishcard/Fishcard';

describe('test Fishcard component', () => {
  test('check whether the component renders correctly', () => {
    const tree = render(<FishCard
      key="fish.id"
      name="fish.name"
      img="fish.img"
      weight="fish.maxWeight"
      onClick={() => { }}
    />);
    expect(tree).toMatchSnapshot();
  });
});
