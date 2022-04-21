import PropTypes from 'prop-types';
import React from 'react-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ title, back }) => (
  <nav className="nav">
    {back ? (<NavLink to="/"><ArrowBackIosNewRoundedIcon /></NavLink>) : <img className="nav-icons" src="./images/polar-bear.png" alt="fish" />}
    <h2 className="nav-title">{title}</h2>
    <div className="nav-search">
      <img className="nav-icons mic" src="./images/mic.png" alt="mic" />
      <img className="nav-icons" src="./images/settings-cog.png" alt="mic" />
    </div>
  </nav>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

NavBar.defaultProps = {
  back: false,
};

export default NavBar;
