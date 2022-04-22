import React from 'react-dom';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import './Fishcard.css';

const FishCard = ({
  name, img, onClick, weight,
}) => (
  <div
    className="fishcard"
    style={{ backgroundImage: `url(${img})` }}
    onClick={onClick}
    onKeyDown={onClick}
    aria-hidden="true"
  >
    <ArrowCircleRightOutlined className="pointer" />
    <div className="fishname">
      <h3>{name}</h3>
      <small>{`${weight}kgs`}</small>
    </div>
    <div className="overlay" />
  </div>
);

FishCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  weight: PropTypes.string.isRequired,
};

export default FishCard;
