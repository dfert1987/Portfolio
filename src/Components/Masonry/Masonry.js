import React from 'react';
import './Masonry.css';

const Masonry = () => {
  return (
    <>
      <div className='masonry-background'>
        <h2 className='masonry-text'>SOME TEXT ABOUT FRONT END DEVELOPMENT</h2>
        <div className='masonry-plus-images'>
            
          <div className='masonry-container'>
            <div className='about-card'>
              <h3>ABOUT</h3>
            </div>
            <div className='resume-card'>
              <h3>RESUME</h3>
            </div>
            <div className='projects-card'>
              <h3>PROJECTS</h3>
            </div>
            <div className='blogs-card'>
              <h3>BLOGS</h3>
            </div>
            <div className='design -card'>
              <h3>DESIGN</h3>
            </div>
            <div className='contact-card'>
              <h3>CONTACT</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Masonry;
