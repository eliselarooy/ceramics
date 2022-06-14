import React from 'react';
import { Link } from 'react-router-dom';
import wheel from '../images/wheel.jpg';
import img_001 from '../images/img-001.png';

const About = () => {
  return (
    <div className="about container">
      <img
        className="wheel"
        src={wheel}
        alt="Abbie throwing on a potter's wheel"
      />
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
      <div className="featured-photos">
        <img src={img_001} alt="" />
        <img src={img_001} alt="" />
        <img src={img_001} alt="" />
        <img src={img_001} alt="" />
      </div>

      <div className="view-more">
        <Link to={'/work'}>View More</Link>
      </div>
    </div>
  );
};

export default About;
