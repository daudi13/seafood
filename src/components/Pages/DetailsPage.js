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
        <NavBar title={fish.name} back />
        <img className="header-img" src={fish.img} alt={fish.name} />
      </header>
      <h4>Fact box</h4>
      <main>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-eader" style={{ backgroundColor: 'pink' }}>Biological facts</Accordion.Header>
            <Accordion.Body className="accordion">
              <ul>
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
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Physical Dimensions & weight</Accordion.Header>
            <Accordion.Body className="accordion">
              <ul>
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
                  <span className="factName">Geo Location</span>
                  <span className="factProp">{fish.geo}</span>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-eader" style={{ backgroundColor: 'pink' }}>Habitat & life facts</Accordion.Header>
            <Accordion.Body className="accordion">
              <ul>
                <li>
                  <span className="factName">Habitat</span>
                  <small className="factProp">{fish.habitat}</small>
                </li>
                <li>
                  <span className="factName">Diet</span>
                  <small className="factProp">{fish.diet}</small>
                </li>
                <li>
                  <span className="factName">lifespan</span>
                  <small className="factProp">{`${fish.lifespan} years`}</small>
                </li>
                <li>
                  <span className="factName">Minimum weight</span>
                  <span className="factProp">{`${fish.minWeight}kgs`}</span>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </main>
    </>
  );
};

export default DetailsPage;
