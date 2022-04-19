import PropTypes from 'prop-types';
import React from 'react-dom';
import './Navbar.css';

const NavBar = ({ title, back }) => (
  <nav className="nav">
    {back || <img className="nav-icons" src="./images/fish.png" alt="fish" />}
    <h2 className="nav-title">{title}</h2>
    <div className="nav-search">
      <img className="nav-icons" src="./images/mic.png" alt="mic" />
      <img className="nav-icons" src="./images/settings-cog.png" alt="mic" />
    </div>
  </nav>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool.isRequired,
};

export default NavBar;
