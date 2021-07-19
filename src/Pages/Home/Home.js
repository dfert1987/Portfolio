import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import Hero from '../../Components/Hero/Hero';
import Masonry from '../../Components/Masonry/Masonry';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../Transitions';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      className='home'
      initial='out'
      animate='end'
      exit='out'
      variants={pageAnimation}
    >
      <NavBar />
      <Hero />
      <div className='masonry-section'>
        <Masonry />
      </div>
    </motion.div>
  );
};

export default Home;
