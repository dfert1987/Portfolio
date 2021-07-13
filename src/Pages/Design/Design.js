import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './Design.css';

const Design = () => {
  return (
    <>
      <NavBar />
      <div className='design-container'>
        <div className='design-title-container'>
          <div className='rectangle'>
            <h1 className='design-title'>DESIGN</h1>
          </div>
        </div>
        <h2 className='posters'>Event Poster Examples</h2>
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
    </>
  );
};

export default Design;
