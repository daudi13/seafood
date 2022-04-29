import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../Navbar/Navbar';
import FishCard from '../Fishcard/Fishcard';
import './HomePage.css';
import { getFish } from '../../redux/Fish/Fish';

const Homepage = () => {
  const navigate = useNavigate();
  const fishArray = useSelector((state) => state.fish.fishArray);
  const [fish, setFish] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fishArray.length) dispatch(getFish());
    setFish(fishArray);
  }, [fishArray]);

  const handleSearch = (event) => {
    event.preventDefault();
    let val = event.target.value;
    if (val.length > 0) {
      val = val.toLowerCase();
      const searchRes = fishArray.filter((arr) => arr.name.toLowerCase().includes(val));
      setFish(searchRes);
    } else {
      setFish(fishArray);
    }
  };

  return (
    <>
      <header className="header">
        <NavBar title="PerspectiveWild" />
        <img className="home-img" src="./images/kindpng_7177875.png" alt="im" />
        <div className="image-cover" />
      </header>
      <div className="search-sec">
        <h6>Animal species</h6>
        <input className="input" type="text" placeholder="search animal..." onChange={handleSearch} />
      </div>
      <main className="main">
        {fish.map((fish) => (
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
