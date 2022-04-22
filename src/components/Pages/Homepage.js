import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../Navbar/Navbar';
import FishCard from '../Fishcard/Fishcard';
import './HomePage.css';
import { getFish } from '../../redux/Fish/Fish';

const Homepage = () => {
  const navigate = useNavigate();
  const fishArray = useSelector((state) => state.fish.fishArray);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fishArray.length) dispatch(getFish());
  }, []);

  return (
    <>
      <header className="header">
        <NavBar title="PerspectiveWild" />
        <img className="home-img" src="./images/kindpng_7177875.png" alt="im" />
        <div className="image-cover" />
      </header>
      <h6>Animal species</h6>
      <main className="main">
        {fishArray.map((fish) => (
          <FishCard
            key={fish.id}
            name={fish.name}
            img={fish.img}
            weight={fish.maxWeight}
            pos={fish.pos}
            onClick={() => { navigate('/detailsPage', { state: { fish } }); }}
          />
        ))}
      </main>
    </>
  );
};

export default Homepage;
