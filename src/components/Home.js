import React from 'react';
import candlesticks from '../images/IMG_7428LR-portrait.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="about container home">
      <NavLink to="/work">
        <img className="abbie" src={candlesticks} alt="Candlesticks" />
      </NavLink>
    </div>
  );
};

export default Home;
