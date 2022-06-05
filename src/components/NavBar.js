import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">about</NavLink>
        </li>
        <li>
          <NavLink to={'/work'}>work</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
