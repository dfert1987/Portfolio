import React from 'react';
import NavBar from '../../Components/Nav/NavBar';

import './Blogs.css';

const Blogs = () => {
  return (
    <>
      <NavBar />
      <div className='blogs-container'>
        <div className='blogs-title-container'>
          <div className='rectangle'>
            <h1 className='blogs-title'>BlOGS</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
