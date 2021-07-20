import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../Transitions';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
import './Blogs.css';

const Blogs = () => {
  return (
    <motion.div
      className='main'
      initial='out'
      animate='end'
      exit='out'
      variants={pageAnimation}
    >
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
              <h3 className='blog-name titles'>Get In Touch with EmailJS</h3>
              <div class='tags'>
                <p>#EmailJS, #React, #Tutorial</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/getting-in-touch-via-emailjs-177cb582832d'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card1'>
              Here, I wanted to have the functionality where a user could email
              me directly from my site, without opening up a third party email
              app. At first I wasn’t really sure what this entailed, or if it
              was even possible with just a frontend...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/getting-in-touch-via-emailjs-177cb582832d'
                target='_blank'
                rel='noopener noreferrer'
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
            <div class='title-content'>
              <h3 className='blog-name titles'>
                An Ultra Quick Guide to Quill.js
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #Quill.js</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card1'>
              There are a few rich text editor options out there, but here we’re
              gonna specifically work with Quill.js. Here we'll learn how to
              impliment it with a Rails API and a React front end...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/an-ultra-quick-guide-to-quill-js-1aae1ac59d56'
                target='_blank'
                rel='noopener noreferrer'
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
          <div class='blog-card three'>
            <div class='title-content second'>
              <h3 className='blog-name titles'>An Introduction to Vue.js</h3>
              <div class='tags'>
                <p>#Vue.js, #Intro, #Javascript</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/an-introduction-to-vue-js-54f271e5f4e1'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card2'>
              I chose Vue for a number of reasons, including its relatively easy
              learning curve, its supposed elegance, and of course, its rising
              popularity with amongst devs...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/an-introduction-to-vue-js-54f271e5f4e1'
                target='_blank'
                rel='noopener noreferrer'
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
          <div class='blog-card four'>
            <div class='title-content third'>
              <h3 className='blog-name titles'>
                Slap a Map in that App Vol. 2
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #GoogleMaps</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/slap-a-map-in-that-app-vol-2-a109e9bf007e'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card2'>
              In the fishing app that we’ve been working with, we want the user
              to have the ability to add markers (fishing holes) on our map via
              the user interface...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/slap-a-map-in-that-app-vol-2-a109e9bf007e'
                target='_blank'
                rel='noopener noreferrer'
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
          <div class='blog-card five'>
            <div class='title-content'>
              <h3 className='blog-name titles'>
                Slap A Map in that App Vol. 1
              </h3>
              <div class='tags'>
                <p>#React, #Rails, #GoogleMaps</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/slap-a-map-in-that-app-3e0345a5f847'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card3'>
              If you’re like me, you love a good map, particularly if it’s
              interactive. A clickable map, goes a long way towards enhancing a
              user’s experience. They’re tactile, informative, visually engaging
              and actually not all that hard to work with...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/slap-a-map-in-that-app-3e0345a5f847'
                target='_blank'
                rel='noopener noreferrer'
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
          <div class='blog-card six'>
            <div class='title-content'>
              <h3 className='blog-name titles'>Getting to Know the Big O</h3>
              <div class='tags'>
                <p>#BigO, #InterviewPrep, #Intro</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/getting-to-know-the-big-o-78568316c475'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card3'>
              If you’re in the business of prepping for your first developer
              job, Big O Notation is a pretty unavoidable topic. Any literature
              on the topic of procuring employment in the industry will note
              that a diligent and prepared job-seeker should be able to...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/getting-to-know-the-big-o-78568316c475'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>10 Aug 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card seven'>
            <div class='title-content'>
              <h3 className='blog-name titles'>
                Optimistic Rendering from a form in React
              </h3>
              <div class='tags'>
                <p>#React, #Rendering, #Forms</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/optimistic-rendering-from-a-form-in-react-fbf442ed1ec'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card4'>
              We use forms to allow the user to alter something on the
              website/app. Sometimes this is a change that occurs on the
              backend, other times it’s only something the user sees
              immediately...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/optimistic-rendering-from-a-form-in-react-fbf442ed1ec'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>3 Aug 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
          <div class='blog-card eight'>
            <div class='title-content'>
              <h3 className='blog-name titles'>
                Stacks on Stacks — Stack Navigator in React Native
              </h3>
              <div class='tags'>
                <p>#ReactNative, #Stacks, #Screens</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/stacks-on-stacks-stack-navigator-react-native-cdb0283f17ac'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card3'>
              While routes make sense for websites, they don’t seem to be as
              logical for an app, since you’re not really going to different
              URLs. This is where Stack Navigator comes in...
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/stacks-on-stacks-stack-navigator-react-native-cdb0283f17ac'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>10 July 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>

          <div class='blog-card nine'>
            <div class='title-content'>
              <h3 className='blog-name titles'>
                SVG Files and Event Listeners
              </h3>
              <div class='tags'>
                <p>#SVG, #Javascript, #Events</p>
              </div>
              <a
                className='mobile-read-link'
                href='https://davidj-fertitta.medium.com/svg-files-and-event-listeners-8f0cb43d82c0'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  buttonStyle='primary--btn'
                  className='mobile-read-button'
                >
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='card-info card3'>
              This HTML code allowed me to apply event listeners to specific
              countries for hover effects and let me wrap the countries I wanted
              in links to the page that would display all of that country’s
              artists.
              <a
                className='read-link'
                href='https://davidj-fertitta.medium.com/svg-files-and-event-listeners-8f0cb43d82c0'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button buttonStyle='primary--btn' className='read-button'>
                  Read Article<span class='licon icon-arr icon-white'></span>
                </Button>
              </a>
            </div>
            <div class='utility-info'>
              <ul class='utility-list'>
                <li>
                  <span class='licon icon-dat'></span>1 June 2020
                </li>
              </ul>
            </div>
            <div class='gradient-overlay'></div>
            <div class='color-overlay'></div>
          </div>
        </div>
        <h3 className='more-blogs'>
          <div>For More Blogs</div>
          <a
            className='blog-link'
            href='https://davidj-fertitta.medium.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            CLICK HERE
          </a>
        </h3>
      </div>
    </motion.div>
  );
};

export default Blogs;
