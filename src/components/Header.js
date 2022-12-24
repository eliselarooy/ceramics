import React from 'react';
import logo from '../images/black-stamp.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <h1>ABBIE LA ROOY</h1>
      </div>
    </>
  );
};

export default Header;
