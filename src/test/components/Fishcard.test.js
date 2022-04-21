/* eslint linebreak-style: ["error", "windows"] */
import { render, screen } from '@testing-library/react';
import FishCard from '../../components/Fishcard/Fishcard';
import 'react-intersection-observer';

describe('test Fishcard component', () => {
  test('check whether the component renders correctly', () => {
    render(<FishCard name="test name1" img="test image" weight="test kg" onClick={() => { }} />);
    expect(screen.getByText('test name1'));
    expect(screen.getByText('test kg'));
  });
});
