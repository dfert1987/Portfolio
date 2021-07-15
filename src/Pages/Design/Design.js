import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './Design.css';

const Design = () => {
  return (
    <div className='full'>
      <NavBar />
      <div className='design-container'>
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
      </div>
    </div>
  );
};

export default Design;
