import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const { state } = useLocation();
  const { fish } = state;

  return (
    <div>
      <h3>{fish.name}</h3>
    </div>
  );
};

export default DetailsPage;
