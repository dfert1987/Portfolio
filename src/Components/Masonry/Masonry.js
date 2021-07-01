import React from 'react';
import Floppy from '../../Images/floppy.png';
import './Masonry.css';

const Masonry = () => {
  return (
    <>
      <div className='masonry-background'>
        <h2 className='masonry-text'>SOME TEXT ABOUT FRONT END DEVELOPMENT</h2>
        <div className='masonry-plus-images'>
          <img className='floppy1' src={Floppy} />
          <div className='masonry-container'>
            <div className='card about'>
              <h3 className='about-text'>ABOUT</h3>
            </div>
            <div className='card resume'>
              <h3 className='resume-text'>RESUME</h3>
            </div>
            <div className='card projects'>
              <h3 className='projects-text'>PROJECTS</h3>
            </div>
            <div className='card blogs'>
              <h3 className='blogs-text'>BLOGS</h3>
            </div>
            <div className='card design'>
              <h3 className='design-text'>DESIGN</h3>
            </div>
            <div className='card contact'>
              <h3 className='contact-text'>CONTACT</h3>
            </div>
          </div>
          <img className='floppy' src={Floppy} />
        </div>
        <div className='bio-container'>
          <h2 className='bio-title'>BIO:</h2>
          <p className='bio'>
            Versatile full stack web developer, with experience as a writer,
            graphic designer and marketer. After spending time working for
            fast-paced international start-ups and running Beijing's first
            English language stand-up comedy club, I've now returned to the US
            as a highly adaptable, self starter, adept at solving problems
            creatively, and merging my newly found passion for software
            engineering with my past work experience to make apps that are as
            engaging and eye-catching as they are functional.
          </p>
        </div>
      </div>
    </>
  );
};

export default Masonry;