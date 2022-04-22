import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

const DetailsPage = () => {
  const { state } = useLocation();
  const { fish } = state;

  return (
    <>
      <header>
        <NavBar title={fish.name} back />
        <img className="header-img" src={fish.img} alt={fish.name} />
      </header>
      <h4>Fact box</h4>
      <main>
        <ul>
          <li>
            <span className="factName">English name</span>
            <small className="factProp">{fish.name}</small>
          </li>
          <li>
            <span className="factName">Latin name</span>
            <small className="factProp">{fish.sciName}</small>
          </li>
          <li>
            <span className="factName">animal class</span>
            <small className="factProp">{fish.animGroup}</small>
          </li>
          <li>
            <span className="factName">Active time</span>
            <small className="factProp">{fish.active}</small>
          </li>
          <li>
            <span className="factName">Maximum length</span>
            <span className="factProp">{`${fish.maxLength}m`}</span>
          </li>
          <li>
            <span className="factName">Min length</span>
            <span className="factProp">{`${fish.minLength}m`}</span>
          </li>
          <li>
            <span className="factName">Maximum weight</span>
            <span className="factProp">{`${fish.maxWeight}kgs`}</span>
          </li>
          <li>
            <span className="factName">Minimum weight</span>
            <span className="factProp">{`${fish.minWeight}kgs`}</span>
          </li>
          <li>
            <span className="factName">Habitat</span>
            <small className="factProp">{fish.habitat}</small>
          </li>
          <li>
            <span className="factName">Diet</span>
            <small className="factProp diet" title={fish.diet}>{fish.diet}</small>
          </li>
          <li>
            <span className="factName">lifespan</span>
            <small className="factProp">{`${fish.lifespan} years`}</small>
          </li>
          <li>
            <span className="factName">Location</span>
            <small className="factProp location">{fish.geo}</small>
          </li>
        </ul>
      </main>
    </>
  );
};

export default DetailsPage;
