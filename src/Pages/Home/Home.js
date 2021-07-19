import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import {motion} from 'framer-motion';
import {animationOne} from '../../Transitions';
import Hero from '../../Components/Hero/Hero';
import Masonry from '../../Components/Masonry/Masonry';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      className='home'
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
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
