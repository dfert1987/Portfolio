import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';

import './Blogs.css';

const Blogs = () => {
  return (
    <>
      <NavBar />
      <div className='blogs-container'>
        <div className='blogs-title-container'>
          <div className='rectangle'>
            <h1 className='blogs-title'>BLOGS</h1>
          </div>
        </div>
        <div className='cards-container'>
          <div className='blog-card'>
            <div className='blog-card-background'>
              <div className='blog-card-background-wrapper'>
                <div className='blog-card-background-main'>
                  <div className='blog-card-background-layer'></div>
                </div>
              </div>
            </div>
            <div className='blog-card-head'>
              <span className='date-box'>
                <span className='date-day'>11</span>
                <span className='date_month'>JAN</span>
              </span>
            </div>
            <div className='blog-card-info'>
              <h3>RICH TEXT EDITORS: QUILL JS</h3>
              <p>
                blog preafdafdaslfkj asdlkfj lasdjfldasjfasdfasdfl;kdasjfljadsf
                jsdlkfjldskj
              </p>
              <a href='/'>
                  <Button buttonStyle='btn--primary' className='blog-button'>
                      READ MORE
                  </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
