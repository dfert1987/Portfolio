import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../Transitions';
import {animationThree, transition} from '../../Animations';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
import Twitter from '../../Images/twitterblue.png';
import LinkedIn from '../../Images/linkedinblue.png';
import Insta from '../../Images/instablue.png';
import FB from '../../Images/fbblue.png';
import GIT from '../../Images/githubblue.png';
import './Contact.css';

export default function Contact() {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hgdjkzr',
        'template_ggc1cca',
        e.target,
        'user_R32BExB3ryy6kaZZxipLF'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setError(false);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setSent(false);
        }
      );
    clearForm(e);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
  };

  const successOrFail = () => {
    if (sent === true && error === false) {
      return (
        <motion.h4
          className='sent-message'
          initial='out'
          animate='end'
          transition={transition}
          variants={animationThree}
        >
          Message Sent!
        </motion.h4>
      );
    }
    if (error === true && sent === false) {
      return (
        <motion.h4
          className='error-message'
          initial='out'
          animate='end'
          transition={transition}
          variants={animationThree}
        >
          Error, Try again.
        </motion.h4>
      );
    } else {
      return null;
    }
  };

  return (
    <motion.div
      className='main-contact'
      initial='out'
      animate='end'
      exit='out'
      variants={pageAnimation}
    >
      <NavBar />
      <div className='contact-container'>
        <div className='contact-title-container'>
          <div className='rectangle'>
            <h1 className='contact-title'>CONTACT</h1>
          </div>
        </div>
        <div className='main-container'>
          <div className='body-container'>
            <div className='form-side'>
              <div className='form-container'>
                <form className='contact-form' onSubmit={sendEmail}>
                  <h4 className='message-text'>Send Me A Message!</h4>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                  />
                  <input
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                  />
                  <input
                    type='text'
                    placeholder='Subject'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <textarea
                    className='message'
                    placeholder='Your message...'
                    rows='6'
                    cols='8'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <div className='success-message-container'>
                    {successOrFail()}
                  </div>
                  <div className='form-button-container'>
                    <div className='btn1'>
                      <Button
                        className=' button send'
                        type='submit'
                        buttonStyle='btn--primary-send'
                      >
                        SEND
                      </Button>
                    </div>
                    <div>
                      <Button
                        type='button'
                        className='buttonn clear'
                        buttonStyle='btn--primary-send'
                        onClick={(e) => clearForm(e)}
                      >
                        CLEAR
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='divider'></div>
            <div className='contact-side'>
              <div className='contact-methods-container'>
                <div className='methods-inner-container'>
                  <div className='phone-email-section'>
                    <div className='phone-container'>
                      <h2 className='phone-email phone-title'>
                        <i className='fas fa-phone-square-alt'></i>PHONE:
                      </h2>
                      <h4 className='method phone'>(720) 425-1286</h4>
                    </div>
                    <div className='email-container'>
                      <h2 className='phone-email email-title'>
                        <i className='fas fa-envelope-square'></i>EMAIL:
                      </h2>
                      <h4 className='method email'>
                        davidj.fertitta@gmail.com
                      </h4>
                    </div>
                  </div>
                  <div className='social-container'>
                    <div className='soc-container'>
                      <a
                        href='https://www.linkedin.com/in/david-fertitta-99298715b/'
                        target='_blank'
                        rel="noopener noreferrer"
                      >
                        <img
                          className='soc'
                          src={LinkedIn}
                          alt='LinkedIn Logo'
                        />
                      </a>
                    </div>
                    <div className='soc-container'>
                      <a
                        href='https://github.com/dfert1987'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img className='soc' src={GIT} alt='Github Logo' />
                      </a>
                    </div>
                    <div className='soc-container'>
                      <a
                        href='https://twitter.com/FertittaDavid'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img className='soc' src={Twitter} alt='Twitter Logo' />
                      </a>
                    </div>
                    <div className='soc-container'>
                      <a
                        href='https://www.facebook.com/david.fertitta.1232/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img className='soc' src={FB} alt='Facebook Logo' />
                      </a>
                    </div>
                    <div className='soc-container'>
                      <a
                        href='https://www.instagram.com/davidj_fertitta/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img className='soc' src={Insta} alt='Instagram Logo' />
                      </a>
                    </div>
                  </div>
                  <div className='mobile-social-container'>
                    <div className='row'>
                      <div className='soc-container'>
                        <a
                          href='https://www.linkedin.com/in/david-fertitta-99298715b/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img
                            className='soc'
                            src={LinkedIn}
                            alt='LinkedIn Logo'
                          />
                        </a>
                      </div>
                      <div className='soc-container'>
                        <a
                          href='https://github.com/dfert1987'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img className='soc' src={GIT} alt='Github Logo' />
                        </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='soc-container'>
                        <a
                          href='https://twitter.com/FertittaDavid'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img
                            className='soc'
                            src={Twitter}
                            alt='Twitter Logo'
                          />
                        </a>
                      </div>
                      <div className='soc-container'>
                        <a
                          href='https://www.facebook.com/david.fertitta.1232/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img className='soc' src={FB} alt='Facebook Logo' />
                        </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='soc-container'>
                        <a
                          href='https://www.instagram.com/davidj_fertitta/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img
                            className='soc insta'
                            src={Insta}
                            alt='Instagram Logo'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
