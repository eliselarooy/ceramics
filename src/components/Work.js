import React from 'react';
import concaveboatform2 from '../galleryimages/concave-boat-form-2.jpg';
import concaveboatform3 from '../galleryimages/concave-boat-form-3.jpg';
import concaveboatform from '../galleryimages/concave-boat-form.jpg';
import curledslabsmokefired2 from '../galleryimages/curled-slab-smoke-fired-2.jpg';
import curledslabsmokefired from '../galleryimages/curled-slab-smoke-fired.jpg';
import dartedbowlii2 from '../galleryimages/darted-bowl-ii-2.JPG';
import dartedbowlii from '../galleryimages/darted-bowl-ii.JPG';
import dartedbowl from '../galleryimages/darted-bowl.jpg';
import pointedovoid from '../galleryimages/pointed-ovoid.JPG';
import blackcandlesticks from '../galleryimages/black-candlesticks.jpg';
import danseurs1 from '../galleryimages/danseurs1.jpg';
import danseurs2 from '../galleryimages/danseurs2.jpg';
import danseurs3 from '../galleryimages/danseurs3.jpg';

const Work = () => {
  return (
    <div className="contact-page container gallery-page">
      <div className="gallery">
        <ul>
          <li>
            <img
              src={danseurs1}
              alt="Candlesticks"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Danseurs</p>
            <p>
              Thrown and altered, stoneware, wood ash grey, chartreuse crackle,
              dolomite glazes
            </p>
          </li>
          <li>
            <img
              src={danseurs2}
              alt="Candlesticks"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Danseurs</p>
            <p>
              Thrown and altered, stoneware, wood ash grey, chartreuse crackle,
              dolomite glazes
            </p>
          </li>
          <li>
            <img
              src={danseurs3}
              alt="Candlesticks"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Danseurs</p>
            <p>
              Thrown and altered, stoneware, wood ash grey, chartreuse crackle,
              dolomite glazes
            </p>
          </li>
          <li>
            <img
              src={pointedovoid}
              alt="Pointed Ovoid"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Pointed Ovoid</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={concaveboatform2}
              alt="Concave Boat Form"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Concave Boat Form</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={concaveboatform3}
              alt="Concave Boat Form"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Concave Boat Form</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={concaveboatform}
              alt="Concave Boat Form"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Concave Boat Form</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={dartedbowlii2}
              alt="Darted Bowl II"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Darted Bowl II</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={dartedbowlii}
              alt="Darted Bowl II"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Darted Bowl II</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={curledslabsmokefired2}
              alt="Curled Slab smoke fired"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Curled Slab</p>
            <p>
              Thrown and altered, terracotta, Dumfries terra sigillata, smoke
              fired
            </p>
          </li>
          <li>
            <img
              src={curledslabsmokefired}
              alt="Curled Slab smoke fired"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Curled Slab</p>
            <p>
              Thrown and altered, terracotta, Dumfries terra sigillata, smoke
              fired
            </p>
          </li>
          <li>
            <img
              src={dartedbowl}
              alt="Darted Bowl"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Darted Bowl I</p>
            <p>Thrown and altered, terracotta, Dumfries terra sigillata</p>
          </li>
          <li>
            <img
              src={blackcandlesticks}
              alt="Black Candlesticks"
              className="gallery-img"
              loading="lazy"
            />
            <p className="title">Black Candlesticks</p>
            <p>Thrown and altered, stoneware, black glaze</p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
