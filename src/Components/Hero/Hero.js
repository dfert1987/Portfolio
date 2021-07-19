import React from 'react';
import CPU from '../../Images/flippedcpu.png';
import CPU2 from '../../Images/cpu.png';
import {motion} from 'framer-motion';
import {
  animationTwo,
  animationThree,
  animationFour,
  transition,
} from '../../Animations';
import './Hero.css';
import '../../App.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='two-side-container'>
        <div className='left-side'>
          <div className='mobile-titles-container'>
            <motion.p
              initial='out'
              animate='end'
              transition={transition}
              variants={animationTwo}
              className='mobile-intro'
            >
              HI, I'M
            </motion.p>
            <motion.h1
              initial='out'
              animate='end'
              transition={transition}
              variants={animationThree}
              className='mobile-name'
            >
              DAVID FERTITTA
            </motion.h1>
            <motion.h3
              className='mobile-description'
              initial='out'
              animate='end'
              transition={transition}
              variants={animationTwo}
            >
              FULL STACK DEV
            </motion.h3>
          </div>
          <div className='image-container'>
            <motion.img
              initial='out'
              animate='end'
              transition={transition}
              variants={animationFour}
              className='cpu'
              src={CPU}
              alt='old computer'
            />
          </div>
          <div className='mobile-image-container'>
            <div>
              <motion.img
                className='mobile-cpu'
                src={CPU}
                alt='old computer'
                initial='out'
                animate='end'
                transition={transition}
                variants={animationFour}
              />
            </div>
            <div>
              <motion.img
                className='cpu2'
                src={CPU2}
                alt='old computer'
                initial='out'
                animate='end'
                transition={transition}
                variants={animationFour}
              />
            </div>
          </div>
        </div>
        <div className='titles-container'>
          <motion.p
            initial='out'
            animate='in'
            transition={transition}
            variants={animationTwo}
            className='intro'
          >
            HI, I'M
          </motion.p>
          <motion.h1
            className='name'
            initial='out'
            animate='end'
            transition={transition}
            variants={animationThree}
          >
            DAVID FERTITTA
          </motion.h1>
          <motion.h3
            className='description'
            initial='out'
            animate='end'
            transition={transition}
            variants={animationTwo}
          >
            FULL STACK DEV
          </motion.h3>
        </div>
        <div className='right-side'></div>
      </div>
    </div>
  );
};

export default Hero;
