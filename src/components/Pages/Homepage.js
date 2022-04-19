import React from 'react';
import NavBar from '../Navbar/Navbar';
import FishCard from '../Fishcard/Fishcard';
import './HomePage.css';

const Homepage = () => {
  const fishData = [
    {
      id: '1',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/Atlantic%20Chub%20Mackerel_Alessandro%20Duci.jpg',
    },
    {
      id: '2',
      name: 'Lobster',
      img: 'https://www.fishwatch.gov/sites/default/files/2_6.jpg',
    },
    {
      id: '3',
      name: 'Rockfish',
      img: 'https://www.fishwatch.gov/sites/default/files/Rockfish_Yellowtail_NB_W.png',
    },
    {
      id: '4',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/Bocaccio_NB_W.png',
    },
    {
      id: '5',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/Kelp_Sugar_NB_W.png',
    },
    {
      id: '6',
      name: 'tuna',
      img: 'https://www.fishwatch.gov/sites/default/files/rsz_1beer_battered_halibut_square_darren_howe_noaa_federal.png',
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
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '10',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '11',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '12',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '13',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '14',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
  ];
  return (
    <>
      <header>
        <NavBar />
        <img className="header-img" src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="fishing boat" />
        <div className="image-cover" />
      </header>
      <main className="main">
        {fishData.map((fish) => (
          <FishCard
            key={fish.id}
            fish={fish}
          />
        ))}
      </main>
    </>
  );
};

export default Homepage;
