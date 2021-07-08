import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
import fakeImage from '../../Images/mepork.jpeg';
import reactLogo from '../../Images/react.png';
import railsLogo from '../../Images/rails.png';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className='projects-container'>
        <div className='projects-title-container'>
          <div className='rectangle'>
            <h1 className='resume-title'>PROJECTS</h1>
          </div>
        </div>
        <div className='card-section'>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img className='image' src={fakeImage} />
            </div>
            <div className='details'>
              <div className='center'>
                <h1 className='project-name'>HOMER</h1>
                <h3 className='subtitle'>A Sports Blog</h3>
                <p className='project-description'>
                  HOMER is a Chicago sports themed sports blog in the style of
                  something you may make with Wordpress. However, HOMER was made
                  from scratch and is complete with full auth, admin privelages,
                  and a rich text editor. This one is a work in process, but
                  will hopefully be finished in the near future.
                </p>
                <div className='button-container'>
                  <Button buttonStyle='btn--primary' className='demo-button'>
                    VIEW DEMO
                  </Button>
                  <Button buttonStyle='btn--outline' className='demo-button'>
                    VISIT REPO
                  </Button>
                </div>
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img className='logo1' src={reactLogo} />
                    <img className='logo2' src={railsLogo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img className='image' src={fakeImage} />
            </div>
            <div className='details'>
              <div className='center'>
                <h1 className='project-name'>HOMER</h1>
                <h3 className='subtitle'>A Sports Blog</h3>
                <p className='project-description'>
                  HOMER is a Chicago sports themed sports blog in the style of
                  something you may make with Wordpress. However, HOMER was made
                  from scratch and is complete with full auth, admin privelages,
                  and a rich text editor. This one is a work in process, but
                  will hopefully be finished in the near future.
                </p>
                <div className='button-container'>
                  <Button buttonStyle='btn--primary' className='demo-button'>
                    VIEW DEMO
                  </Button>
                  <Button buttonStyle='btn--outline' className='demo-button'>
                    VISIT REPO
                  </Button>
                </div>
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img className='logo1' src={reactLogo} />
                    <img className='logo2' src={railsLogo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
