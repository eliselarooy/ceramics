import React from 'react';
import abbie from '../images/IMG_7299LR.JPG';

const About = () => {
  return (
    <div className="about container">
      <img className="abbie" src={abbie} alt="Abbie pulling a candlestick" />
      <div className="about-text">
        <p>
          Abbie La Rooy is a ceramic artist currently working in Dumfries and
          Galloway, Scotland.
        </p>
        <p>
          Abbie graduated from Goldsmiths, University of London in 2019 with a
          B.A. in Design. Her current work explores the inherent material
          properties of clay and her interaction with it. She often incorporates
          wild clays she has harvested herself from the local landscape. Abbie
          continues to develop her process alongside working as a studio
          technician and ceramics teacher.
        </p>
      </div>
    </div>
  );
};

export default About;
