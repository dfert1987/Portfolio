import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
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
      </div>
    </>
  );
};

export default Projects;
