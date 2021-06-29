import React from 'react';

import './Hero.css';
import '../../App.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='two-side-container'>
        <div className='left-side'></div>
        <div className='titles-container'>
          <p className='intro'>HI, I'M</p>
          <h1 className='name'>DAVID FERTITTA</h1>
          <h3 className='description'>DEVELOPER AND MORE</h3>
        </div>
        <div className='right-side'></div>
      </div>
    </div>
  );
};

export default Hero;
