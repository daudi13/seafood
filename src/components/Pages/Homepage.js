/* eslint linebreak-style: ["error", "windows"] */
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
      <header>
        <NavBar title="SaveEarth" />
        <img className="header-img" src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="fishing boat" />
        <div className="image-cover" />
      </header>
      <h4>Animal species</h4>
      <main className="main">
        {fishArray.map((fish) => (
          <FishCard
            key={fish.id}
            name={fish.name}
            img={fish.img}
            weight={fish.maxWeight}
            onClick={() => { navigate('/detailsPage', { state: { fish } }); }}
          />
        ))}
      </main>
    </>
  );
};

export default Homepage;
