import React from 'react';
import NavBar from '../Navbar/Navbar';
import FishCard from '../Fishcard/Fishcard';

const Homepage = () => {
  const fishData = [
    {
      id: '1',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '2',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '3',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '4',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '5',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '6',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '7',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
    },
    {
      id: '8',
      name: 'tuna',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bates.edu%2Fbiology%2Ffiles%2F2015%2F03%2Ftunaseinersdotcom.jpg&f=1&nofb=1',
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
      </header>
      <main>
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
