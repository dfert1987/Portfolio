import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
import fakeImage from '../../Images/mepork.jpeg';
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
        <div className='card-container'>
          <div className='front'>
            <img className='front-image' src={fakeImage} alt='Homer Preview' />
            <div className='name-description-container'>
              <h3 className='project-name'>HOMER</h3>
              <p className='project-subtitle'>Chicago Sports Blog</p>
            </div>
          </div>
          <div className='back'>
            <div className='info-and-techs'>
              <p className='info'>
                HOMER is a Chicago sports blog, built to function like a blog
                one would build using Wordrpess. It's complete with a Rich Text
                Editor, full auth and a Rails API backend. This is my current
                project, but it should hopefully be deployed soon(ish).
              </p>
              <div className='techs'>
                <p className='tech1'>React</p>
                <p className='tech2'>Rails</p>
              </div>
            </div>
            <div className='button-container'>
              <Button className='demo' buttonStyle='btn--primary'>
                VIEW A DEMO
              </Button>
              <Button className='github' buttonStyle='btn--outline'>
                GITHUB REPO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
