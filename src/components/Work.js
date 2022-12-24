import React from 'react';
import a from '../images/IMG_7456LR.jpg';
import b from '../images/IMG_7428LR.jpg';

const Work = () => {
  return (
    <div className="contact-page container">
      <div>
        <img
          src={a}
          alt="Terra sigillata earthenware candlesticks"
          className="abbie"
        />
        <p>Terra sigillata earthenware candlesticks</p>
        <img src={b} alt="Black stoneware candlesticks" className="abbie" />
        <p>Black stoneware candlesticks</p>
      </div>
    </div>
  );
};

export default Work;
