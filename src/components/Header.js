import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/black-stamp.png';

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>ABBIE LA ROOY</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>about</Link>
          </li>
          <li>
            <Link to={'/work'}>work</Link>
          </li>
          <li>
            <Link to={'/contact'}>contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
