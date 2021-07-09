import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import Comedy from '../../Images/90s.png';
import CPU from '../../Images/cpu.png';
import './About.css';

const About = () => {
  return (
    <>
      <NavBar />
      <div className='about-container'>
        <div className='about-title-container'>
          <div className='rectangle'>
            <h1 className='about-title'>ABOUT</h1>
          </div>
        </div>
        <img src={Comedy} className='mobile-image' alt='David graphic'/>
        <div className='body-container'>
          <div className='text-container'>
            <h4 className='about-subtitle'>MY STORY:</h4>
            <p className='about-body'>
              Hi, my name is David Fertitta. I'm a software developer / frontend
              engineer who strives to combine my diverse skillset, which
              includes experience in content creation, graphic design and
              marketing, with my new found love of coding to creeate apps and
              websites that are as engaging as they are intuitive, and
              functional.
            </p>
            <p className='about-body'>
              My path to becoming a developer has been pretty unorthodox though,
              because prior to beginning my coding journey I spent most of my
              adult life living abroad in South Korea and then Beijing, China,
              where I taught, designed curriculum, ran Beijing’s first ever
              english language stand up comedy club and eventually became the
              managing editor for a lifestyle/nightlife app. It's this job as an
              editor where I first worked with a dev team, and it's here that I
              first became somewhat intrigued by the idea of learning to code.
            </p>
            <p className='about-body'>
              Upon returning to the US, I quickly realized that being
              well-traveled wasn't quite as much of a hireable skill as I had
              previously hoped. I knew I needed to revamp and refocus my career
              path, so I thought about the dev team I worked with in Beijing and
              thought about how awesome it was that they could turn our ideas
              for our app into a reality. It was this ability to create
              something out of nothing that really excited me, and eventually
              propelled me into signing up for Flatiron's immersive Software
              Engineering bootcamp.
            </p>
            <p className='about-body'>
              Although the bootcamp was nervewracking at first, I quickly
              developed a realized that I had made a great decision, and learned
              that I had a real knack for stylish frontend develpment. Since
              graduating, I've been able to apply what I've learned while
              developing countless new skills while working as part of agile dev
              teams for fast paced start-ups (NeuroCann / TransferThought)
              building out interactive frontend features, making calls to
              RESTful APIs, and working closely with design teams to produce
              sleek fully responsive apps.
            </p>
            <div className='bullets-section'>
              <div className='bullets-container'>
                <h4 className='about-subtitle skills'>MY Skills:</h4>
                <p className='about-body skills'>
                  <ul className='skills-list'>
                    <li className='hobby-item'>Javascript</li>
                    <li className='hobby-item'>HTML/CSS</li>
                    <li className='hobby-item'>React</li>
                    <li className='hobby-item'>Vue</li>
                    <li className='hobby-item'>Ruby</li>
                    <li className='hobby-item'>Rails</li>
                    <li className='hobby-item'>SASS</li>
                    <li className='hobby-item'>Material UI</li>
                    <li className='hobby-item'>Wordpress</li>
                    <li className='hobby-item'>Adobe (Photoshop / InDesign)</li>
                    <li className='hobby-item'>Node</li>
                  </ul>
                </p>
              </div>
              <h4 className='about-subtitle interests'>My Interests:</h4>
              <p className='about-body hobbies'>
                When I'm not coding most of my time is spent...
                <ul className='hobbies-list'>
                  <li className='hobby-item'>Cooking</li>
                  <li className='hobby-item'>DJing</li>
                  <li className='hobby-item'>Fishing</li>
                  <li className='hobby-item'>
                    Cheering (and mostly being let down by) the Chicago Bears,
                    Cubs, and Bulls
                  </li>
                  <li className='hobby-item'>
                    Snuggling with my two French Bulldogs
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className='graphic-container'>
            <img className='graphic' src={Comedy} alt='David graphic'/>
            <img className='graphic-cpu' src={CPU} alt='old computer'/>
          </div>
        </div>
        <div className='small-screen-bullets'>
          <div className='bullets-container'>
            <h4 className='about-subtitle skills'>MY Skills:</h4>
            <p className='about-body skills'>
              <ul className='skills-list'>
                <li className='hobby-item'>Javascript</li>
                <li className='hobby-item'>HTML/CSS</li>
                <li className='hobby-item'>React</li>
                <li className='hobby-item'>Vue</li>
                <li className='hobby-item'>Ruby</li>
                <li className='hobby-item'>Rails</li>
                <li className='hobby-item'>SASS</li>
                <li className='hobby-item'>Material UI</li>
                <li className='hobby-item'>Wordpress</li>
                <li className='hobby-item'>Adobe (Photoshop / InDesign)</li>
                <li className='hobby-item'>Node</li>
              </ul>
            </p>
          </div>
          <div className='bullets-container'>
            <h4 className='about-subtitle interests'>My Interests:</h4>
            <p className='about-body hobbies'>
              When I'm not coding most of my time is spent...
              <ul className='hobbies-list'>
                <li className='hobby-item'>Cooking</li>
                <li className='hobby-item'>DJing</li>
                <li className='hobby-item'>Fishing</li>
                <li className='hobby-item'>
                  Cheering (and mostly being let down by) the Chicago Bears,
                  Cubs, and Bulls
                </li>
                <li className='hobby-item'>
                  Snuggling with my two French Bulldogs
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
