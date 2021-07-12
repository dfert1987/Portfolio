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
          <div class='blog-card'>
            <div class='title-content'>
              <h3 className='titles'>
                  An Ultra Quick Guide to Quill.js
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #Quill.js</p>
              </div>
            </div>
            <div class='card-info'>
              There are a few rich text editor options out there, but here we’re
              gonna specifically work with Quill.js. Here we'll learn how to
              impliment it with a Rails API and a React front end..
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>08 Jun 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card'>
            <div class='title-content'>
              <h3 className='titles'>
                <a href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'>
                  An Ultra Quick Guide to Quill JS
                </a>
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #Quill.js</p>
              </div>
            </div>
            <div class='card-info'>
              There are a few rich text editor options out there, but here we’re
              gonna specifically work with Quill.js. Here we'll learn how to
              impliment it with a Rails API and a React front end..
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>08 Jun 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card'>
            <div class='title-content'>
              <h3 className='titles'>
                <a href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'>
                  An Ultra Quick Guide to Quill JS
                </a>
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #Quill.js</p>
              </div>
            </div>
            <div class='card-info'>
              There are a few rich text editor options out there, but here we’re
              gonna specifically work with Quill.js. Here we'll learn how to
              impliment it with a Rails API and a React front end..
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>08 Jun 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card'>
            <div class='title-content'>
              <h3 className='titles'>
                <a href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'>
                  An Ultra Quick Guide to Quill JS
                </a>
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #Quill.js</p>
              </div>
            </div>
            <div class='card-info'>
              There are a few rich text editor options out there, but here we’re
              gonna specifically work with Quill.js. Here we'll learn how to
              impliment it with a Rails API and a React front end..
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>08 Jun 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
