import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import Res from '../../Images/resume.pdf';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../Transitions';

import './Resume.css';

const Resume = () => {
  return (
    <motion.div
      className='main'
      initial='out'
      animate='end'
      exit='out'
      variants={pageAnimation}
    >
      <NavBar />
      <div className='resume-container'>
        <div className='resume-title-container'>
          <div className='rectangle'>
            <h1 className='resume-title'>RESUME</h1>
          </div>
        </div>
        <div className='pdf-container'>
          <embed
            src={Res}
            width='80%'
            height='100%'
            frameBorder='2px'
            type='application/pdf'
            className='pdf'
          ></embed>
          <embed
            src={Res}
            width='100%'
            height='95%'
            frameBorder='2px'
            type='application/pdf'
            className='tablet-pdf'
          ></embed>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
