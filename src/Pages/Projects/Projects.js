import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
import {Link} from 'react-router-dom';
import reactLogo from '../../Images/react.png';
import railsLogo from '../../Images/rails.png';
import typescriptLogo from '../../Images/typescript.png';
import nodeLogo from '../../Images/node.png';
import jsLogo from '../../Images/js.png';
import nativeLogo from '../../Images/reactnative.png';
import homerCard from '../../Images/homercard.png';
import anglerCard from '../../Images/anglercard.png';
import ncCard from '../../Images/nccard.png';
import crateCard from '../../Images/cratecard.png';
import bleCard from '../../Images/BLE.png';
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
        <h2 className='directions'>HOVER OVER CARDS FOR MORE INFO</h2>
        <div className='card-section'>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img className='image' src={homerCard} alt='Homer Blog' />
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
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img className='logo1' src={reactLogo} alt='React Logo' />
                    <img className='logo2' src={railsLogo} alt='Rails Logo' />
                  </div>
                </div>
                <div className='button-container'>
                  <Link to='/'>
                    <Button buttonStyle='btn--primary' className='demo-button'>
                      VIEW DEMO
                    </Button>
                  </Link>
                  <a href='https://github.com/dfert1987/Homer_Blog'>
                    <Button buttonStyle='btn--outline' className='demo-button'>
                      VISIT REPO
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img className='image' src={ncCard} alt='NeuroCann' />
            </div>
            <div className='details'>
              <div className='center'>
                <h1 className='project-name'>NeuroCann Login</h1>
                <h3 className='subtitle'>A Cannabis ERP</h3>
                <p className='project-description'>
                  NeuroCann is a cannabis erp. During my time there, I did a lot
                  of front end work including, interactive tables, modals, and
                  this sleek login page featuring responsive design, and an
                  elegant switch statement to toggle between the views.
                </p>
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img className='logo1' src={reactLogo} alt='React Logo' />
                    <img className='logo2' src={nodeLogo} alt='Node Logo' />
                    <img
                      className='logo3'
                      src={typescriptLogo}
                      alt='Typscript Logo'
                    />
                  </div>
                </div>
                <div className='button-container'>
                  <Link to='/'>
                    <Button buttonStyle='btn--primary' className='demo-button'>
                      VIEW DEMO
                    </Button>
                  </Link>
                  <a href='https://www.neurocann.com/'>
                    <Button buttonStyle='btn--outline' className='demo-button'>
                      VISIT COMPANY SITE
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img className='image' src={anglerCard} alt='Angler App' />
            </div>
            <div className='details'>
              <div className='center'>
                <h1 className='project-name'>Angler</h1>
                <h3 className='subtitle'>A Fishing Log Book</h3>
                <p className='project-description'>
                  Angler allows users to log their fishing trips to improve
                  future performance. Through the Google Maps API, users can
                  mark fishing spots, and log various trip details. The app also
                  allows to catalog species of fish caught, as well as organize
                  their own personal tacklebox.
                </p>
                <div className='button-container'>
                  <a href='https://www.youtube.com/watch?v=-zv0Unm8neM'>
                    <Button buttonStyle='btn--primary' className='demo-button'>
                      VIEW DEMO
                    </Button>
                  </a>
                  <a href='https://github.com/dfert1987/AnglerApp'>
                    <Button buttonStyle='btn--outline' className='demo-button'>
                      VISIT REPO
                    </Button>
                  </a>
                </div>
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img className='logo1' src={reactLogo} alt='React Logo' />
                    <img className='logo2' src={railsLogo} alt='Rails Logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img
                className='image'
                src={crateCard}
                alt='Global Crate Digger'
              />
            </div>
            <div className='details'>
              <div className='center'>
                <h1 className='project-name'>Global Crate Digger</h1>
                <h3 className='subtitle'>World Music Discovery App</h3>
                <p className='project-description'>
                  An early project built in Vanilla JS that allows users to
                  discover and listen to new music from around the globe by
                  interacting with sleek interactive maps!
                </p>
                <div className='button-container'>
                  <Link to='/'>
                    <Button buttonStyle='btn--primary' className='demo-button'>
                      VIEW DEMO
                    </Button>
                  </Link>
                  <a href='https://github.com/dfert1987/cratediggerproject'>
                    <Button buttonStyle='btn--outline' className='demo-button'>
                      VISIT REPO
                    </Button>
                  </a>
                </div>
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img className='logo1' src={jsLogo} alt='Javascript Logo' />
                    <img className='logo2' src={railsLogo} alt='Rails Logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='image-container'>
              <img className='image' src={bleCard} alt='Big League Eats' />
            </div>
            <div className='details'>
              <div className='center'>
                <h1 className='project-name'>Big League Eats</h1>
                <h3 className='subtitle'>Mobile Stadium Food Review App</h3>
                <p className='project-description'>
                  Dabbling in React Native, I started a project that allowed
                  users to review food vendors/stalls at MLB stadiums based on
                  their seat section. Users can add vendors and review existing
                  vendors. (This is a very rough start, to an idea. Would love
                  to flush this out and fix it up in the future.)
                </p>
                <div className='button-container'>
                  <Link to='/'>
                    <Button buttonStyle='btn--primary' className='demo-button'>
                      VIEW DEMO
                    </Button>
                  </Link>
                  <a href='https://github.com/dfert1987/capstone-frontend'>
                    <Button buttonStyle='btn--outline' className='demo-button'>
                      VISIT REPO
                    </Button>
                  </a>
                </div>
                <div className='stack-container'>
                  <h3 className='stack-title'>Stack:</h3>
                  <div className='logos'>
                    <img
                      className='logo1'
                      src={nativeLogo}
                      alt='React Native Logo'
                    />
                    <img className='logo2' src={railsLogo} alt='Rails Logo' />
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
