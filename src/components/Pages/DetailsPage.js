import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

const DetailsPage = () => {
  const { state } = useLocation();
  const { fish } = state;

  return (
    <>
      <header>
        <NavBar title={fish.name} back={1} />
      </header>
    </>
  );
};

export default DetailsPage;
