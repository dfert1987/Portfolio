import React from 'react';
import CPU from '../../Images/flippedcpu.png';
import CPU2 from '../../Images/cpu.png';
import './Hero.css';
import '../../App.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='two-side-container'>
        <div className='left-side'>
          <div className='mobile-titles-container'>
            <p className='mobile-intro'>HI, I'M</p>
            <h1 className='mobile-name'>DAVID FERTITTA</h1>
            <h3 className='mobile-description'>DEVELOPER AND MORE</h3>
          </div>
          <div className='image-container'>
            <img className='cpu' src={CPU} />
          </div>
          <div className='mobile-image-container'>
            <div>
              <img className='mobile-cpu' src={CPU} />
            </div>
            <div>
              <img className='cpu2' src={CPU2} />
            </div>
          </div>
        </div>
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
