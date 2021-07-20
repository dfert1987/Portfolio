import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../Transitions';
import './Design.css';

const Design = () => {
  return (
    <motion.div
      className='main-back'
      initial='out'
      animate='end'
      exit='out'
      variants={pageAnimation}
    >
      <NavBar />
      <div className='design-title-container'>
        <div className='rectangle'>
          <h1 className='design-title'>DESIGN</h1>
        </div>
      </div>
      <div className='carousel-container'>
        <input type='radio' name='position' />
        <input type='radio' name='position' />
        <input type='radio' name='position' />
        <input type='radio' name='position' />
        <input type='radio' name='position' />
        <main id='carousel'>
          <div class='item'></div>
          <div class='item'></div>
          <div class='item'></div>
          <div class='item'></div>
          <div class='item'></div>
        </main>
      </div>
    </motion.div>
  );
};

export default Design;
