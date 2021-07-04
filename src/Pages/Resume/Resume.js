import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './Resume.css';

const Resume = () => {
  return (
    <>
      <NavBar />
      <div className='resume-container'>
        <div className='rsume-title-container'>
          <div className='rectangle'>
            <h1 className='resume-title'>RESUME</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
