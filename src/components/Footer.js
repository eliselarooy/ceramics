import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.instagram.com/abbielarooy/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      {' | '}
      <Link to={'/contact'}>Contact</Link>
    </div>
  );
};

export default Footer;
