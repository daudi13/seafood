import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

const DetailsPage = () => {
  const { state } = useLocation();
  const { fish } = state;

  return (
    <>
      <header>
        <NavBar title={fish.name} back={1} />
        <img className="header-img" src={fish.img} alt={fish.name} />
      </header>
      <h4>Fact box</h4>
      <main>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header">Accordion Item #1</Accordion.Header>
            <Accordion.Body className="accordion">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="accordion-header">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </main>
    </>
  );
};

export default DetailsPage;
