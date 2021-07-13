import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className='contact-container'>
        <div className='contact-title-container'>
          <div className='rectangle'>
            <h1 className='contact-title'>CONTACT</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
