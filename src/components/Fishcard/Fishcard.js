import React from 'react-dom';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import './Fishcard.css';

const FishCard = ({
  name, img, onClick, weight, pos,
}) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    onClick={onClick}
    onKeyDown={onClick}
    aria-hidden="true"
    className="fishcard"
  >
    <ArrowCircleRightOutlined className="pointer" />
    <div className="fishname">
      <h3>{name}</h3>
      <small>{`${weight}kgs`}</small>
    </div>
    <div className={pos === 1 || pos === 2 || pos === 5 || pos === 6 || pos === 9
      ? 'overlay lightblue' : 'overlay darkblue'}
    />
  </div>
);

FishCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  weight: PropTypes.string.isRequired,
  pos: PropTypes.number.isRequired,
};

export default FishCard;
