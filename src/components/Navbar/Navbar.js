import React from 'react-dom';
import mic from './images/mic.png';
import fish from './images/fish.png';

const Navbar = () => (
  <nav>
    <img src={fish} alt="fish" />
    <h2 className="">title</h2>
    <img src={mic} alt="mic" />
  </nav>
);

export default Navbar;
