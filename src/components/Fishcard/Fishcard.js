import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react-dom';

const FishCard = ({ fish }) => (
  <div className="fishcard">
    <ArrowCircleRightOutlined />
    <img src={fish.img} alt="fish" />
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
