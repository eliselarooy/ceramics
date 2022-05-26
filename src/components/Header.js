import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <div className="logo">Logo</div>
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
