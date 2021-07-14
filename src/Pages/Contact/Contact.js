import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
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
          <div className='main-container'>
            <div className='instructions-container'>
              <h3 className='main-instructions'>Want to Know More?</h3>
              <h4 className='second-instructions'>
                Email, Call, or Follow on Social!
              </h4>
            </div>
            <div className='form-side'>
              <div className='form-container'>
                <form className='contact-form'>
                  <h4 className='message-text'>Send Me A Message!</h4>
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Your Email' />
                  <input type='text' placeholder='Subject' />
                  <textarea
                    className='message'
                    placeholder='Your message...'
                    rows='6'
                    cols='8'
                  />
                  <div className='form-button-container'>
                    <div className='btn1'>
                      <Button className='send' buttonStyle='btn--primary-send'>
                        SEND
                      </Button>
                    </div>
                    <div>
                      <Button className='clear' buttonStyle='btn--primary-send'>
                        CLEAR
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='contact-side'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
