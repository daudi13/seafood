import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import FishCard from '../Fishcard/Fishcard';
import './HomePage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const fishData = [
    {
      id: '1',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/white%20hake_Calvin%20Alexander_1.jpg',
    },
    {
      id: '2',
      name: 'Lobster',
      img: 'https://www.fishwatch.gov/sites/default/files/Atlantic%20Chub%20Mackerel_Alessandro%20Duci.jpg',
    },
    {
      id: '3',
      name: 'Rockfish',
      img: 'https://www.fishwatch.gov/sites/default/files/1.JPG',
    },
    {
      id: '4',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/2_5.jpg',
    },
    {
      id: '5',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/Sablefish%202.png',
    },
    {
      id: '6',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/1%20-%20atl_halibut_noa.jpg',
    },
    {
      id: '7',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/3%20-%20halibut2_fullsize.jpg',
    },
    {
      id: '8',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/1%20photo-west-coast-region-photo-gallery.jpg',
    },
    {
      id: '9',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/Canary%20rockfish%20captured%20on%20a%20research%20trawl%20Credit%20NOAA.jpg',
    },
    {
      id: '10',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/black_grouper_whsa_sd.jpg',
    },
    {
      id: '11',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/marlin%20david%20itano_from%20SWFSC%20research%20page.PNG',
    },
    {
      id: '12',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/1_8.jpg',
    },
    {
      id: '13',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '14',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/4_6.jpg',
    },
  ];
  return (
    <>
      <header>
        <NavBar title="seafood" back={false} />
        <img className="header-img" src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="fishing boat" />
        <div className="image-cover" />
      </header>
      <h4>All fish species</h4>
      <main className="main">
        {fishData.map((fish) => (
          <FishCard
            key={fish.id}
            name={fish.name}
            img={fish.img}
            onClick={() => { navigate('/detailsPage', { state: { fish } }); }}
          />
        ))}
      </main>
    </>
  );
};

export default Homepage;
