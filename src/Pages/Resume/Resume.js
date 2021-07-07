import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import Res from '../../Images/resume.pdf';
import './Resume.css';

const Resume = () => {
  return (
    <>
      <NavBar />
      <div className='resume-container'>
        <div className='resume-title-container'>
          <div className='rectangle'>
            <h1 className='resume-title'>RESUME</h1>
          </div>
        </div>
        <div className='main-container'>
          <div className='download-title-container'>
            <h2 className='download-title'>View or Download Resume Below</h2>
          </div>
          <div className='pdf-container'>
            <embed
              src={Res}
              width='80%'
              height='90%'
              frameBorder='2px'
              type='application/pdf'
              className='pdf'
            ></embed>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
