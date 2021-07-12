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
      </div>
    </>
  );
};

export default Design;
