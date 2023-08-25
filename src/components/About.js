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
        <div className="exhibitions">
          <p>
            <b>Exhibitions/Awards</b>
          </p>
          <p>
            <b>2023</b> - The Amber Room, Matt's Gallery, London.
          </p>
          <p>
            <b>2023</b> - Spring Fling Open Studios, Gracefield Arts Centre,
            Dumfries.
          </p>
          <p>
            <b>2023</b> - Emerge Mentoring Bursary, Upland CIC.{' '}
            <a
              href="https://www.weareupland.com/projects/emerge/blog/emerge-2023-part-1-23032023"
              target="_blank"
              rel="noreferrer"
            >
              <u>Read blog post</u>
            </a>
          </p>

          <p>
            <b>2022</b> - Lots of Lot, Lot Projects, London.
          </p>

          <p>
            <b>2019</b> - The Milk Has Turned Against Us Goldsmiths Design
            Degree Show, Copeland Park, London.
          </p>

          <p>
            <b>2016</b> - Saatchi Gallery/Deutsche Bank Art Prize for Schools
            Saatchi Gallery, London (shortlisted).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
