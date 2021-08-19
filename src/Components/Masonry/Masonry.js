import React from 'react';
import Floppy from '../../Images/floppy-min.png';
import {Link} from 'react-router-dom';
import './Masonry.css';

const Masonry = () => {
  return (
    <div className='masonry-background'>
      <h2 className='masonry-text'>LEARN MORE ABOUT ME AND MY WORK!</h2>
      <div className='masonry-plus-images'>
        <img className='floppy1' src={Floppy} alt='floppy disk' />
        <div className='masonry-container'>
          <Link className='card about' to='/about'>
            <h3 className='about-text'>ABOUT</h3>
          </Link>
          <Link className='card resume' to='/resume'>
            <h3 className='resume-text'>RESUME</h3>
          </Link>
          <Link className='card projects' to='/projects'>
            <h3 className='projects-text'>PROJECTS</h3>
          </Link>
          <Link className='card blogs' to='/blogs'>
            <h3 className='blogs-text'>BLOGS</h3>
          </Link>
          <Link className='card design' to='/design'>
            <h3 className='design-text'>DESIGN</h3>
          </Link>
          <Link className='card contact' to='/contact'>
            <h3 className='contact-text'>CONTACT</h3>
          </Link>
        </div>
        <img className='floppy' src={Floppy} alt='floppy disk' />
      </div>
      <div className='bio-container'>
        <h2 className='bio-title'>BIO:</h2>
        <p className='bio'>
          Versatile full stack web developer with a passion for developing
          applications that are as engaging and eye-catching as they are
          functional. I have ~1 year professional experience working as a
          frontend developer in an agile development team, building out a
          minimum viable product for an ERP software startup. 
        </p>
      </div>
    </div>
  );
};

export default Masonry;
