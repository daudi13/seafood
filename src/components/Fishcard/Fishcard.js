import React from 'react-dom';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import './Fishcard.css';

const FishCard = ({ fish }) => (
  <div className="fishcard" style={{ backgroundImage: `url(${fish.img})` }}>
    <ArrowCircleRightOutlined />
    <h3>{fish.name}</h3>
  </div>
);

FishCard.propTypes = {
  fish: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FishCard;
