import React from 'react';
import logo from '../images/black-stamp.png';

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>ABBIE LA ROOY</h1>
      </div>
    </>
  );
};

export default Header;
