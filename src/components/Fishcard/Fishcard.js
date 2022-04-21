/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react-dom';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import './Fishcard.css';

const FishCard = ({
  name, img, onClick, weight,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className="fishcard"
    style={{ backgroundImage: `url(${img})` }}
    onClick={onClick}
  >
    <ArrowCircleRightOutlined className="pointer" />
    <div>
      <h3 className="fishname">{name}</h3>
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
