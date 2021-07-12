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
        <h2 className='blog-instructions'>HOVER OVER CARDS FOR FULL BLOG</h2>
        <div className='cards-container'>
          <div class='blog-card'>
            <div class='title-content'>
              <h3 className='titles'>An Ultra Quick Guide to Quill.js</h3>
              <div class='tags'>
                <p>#React, #Rails, #Quill.js</p>
              </div>
            </div>
            <div class='card-info card1'>
              There are a few rich text editor options out there, but here we’re
              gonna specifically work with Quill.js. Here we'll learn how to
              impliment it with a Rails API and a React front end...
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
                  <span class='licon icon-dat'></span>08 Jun 2021
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card two'>
            <div class='title-content second'>
              <h3 className='titles'>An Introduction to Vue.js</h3>
              <div class='tags'>
                <p>#Vue.js, #Intro, #Javascript</p>
              </div>
            </div>
            <div class='card-info card2'>
              I chose Vue for a number of reasons, including its relatively easy
              learning curve, its supposed elegance, and of course, its rising
              popularity with amongst devs...
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
                  <span class='licon icon-dat'></span>08 Sep 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card three'>
            <div class='title-content third'>
              <h3 className='titles'>Slap a Map in that App Vol. 2</h3>
              <div class='tags'>
                <p>#React, #Rails, #GoogleMaps</p>
              </div>
            </div>
            <div class='card-info card2'>
              In the fishing app that we’ve been working with, we want the user
              to have the ability to add markers (fishing holes) on our map via
              the user interface...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/slap-a-map-in-that-app-vol-2-a109e9bf007e'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>01 Sep 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card four'>
            <div class='title-content'>
              <h3 className='titles'>Slap A Map in that App Vol. 1</h3>
              <div class='tags'>
                <p>#React, #Rails, #GoogleMaps</p>
              </div>
            </div>
            <div class='card-info card3'>
              If you’re like me, you love a good map, particularly if it’s
              interactive. A clickable map, goes a long way towards enhancing a
              user’s experience. They’re tactile, informative, visually engaging
              and actually not all that hard to work with...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/slap-a-map-in-that-app-3e0345a5f847'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>24 Aug 2020
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
