import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import Hero from '../../Components/Hero/Hero';
import Masonry from '../../Components/Masonry/Masonry';
import './Home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className='masonry-section'>
        <Masonry  />
      </div>
    </>
  );
};

export default Home;
