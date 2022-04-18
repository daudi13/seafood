import React from 'react-dom';
import './Navbar.css';

const NavBar = () => (
  <nav className="nav">
    <img className="nav-icons" src="./images/fish.png" alt="fish" />
    <h2 className="nav-title">Seafood</h2>
    <div className="nav-search">
      <img className="nav-icons" src="./images/mic.png" alt="mic" />
      <img className="nav-icons" src="./images/settings-cog.png" alt="mic" />
    </div>
  </nav>
);

export default NavBar;
