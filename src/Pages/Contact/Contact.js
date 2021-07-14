import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../../Components/Nav/NavBar';
import {Button} from '../../Components/Button/Button';
import './Contact.css';

export default function Contact() {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clearForm = (e) => {
    e.preventDefault();
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
  };

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
              <h4 className='second-instructions'>
                Email, Call, or Follow on Social!
              </h4>
            </div>
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
                    />
                    <input
                      type='text'
                      placeholder='Your Email'
                      name='email'
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='Subject'
                      name='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                      className='message'
                      placeholder='Your message...'
                      rows='6'
                      cols='8'
                      name='message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className='form-button-container'>
                      <div className='btn1'>
                        <Button
                          className='send'
                          type='submit'
                          buttonStyle='btn--primary-send'
                        >
                          SEND
                        </Button>
                      </div>
                      <div>
                        <Button
                          type='button'
                          className='clear'
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
                  <div className='phone-container'>
                    <h4 className='method phone'>(720) 425-1286</h4>
                  </div>
                  <div className='email-container'>
                    <h4 className='method email'>davidj.fertitta@gmail.com</h4>
                  </div>
                  <div className='linkedIn-container'>
                    <h4 className='method linkedIn'>
                      /david-fertitta-99298715b/
                    </h4>
                  </div>
                  <div className='github-container'>
                    <h4 className='method gitHub'>/dfert1987</h4>
                  </div>
                  <div className='twitter-container'>
                    <h4 className='method twitter'>@FertittaDavid</h4>
                  </div>
                  <div className='facebook-container'>
                    <h4 className='method facebook'>/david.fertitta.1232/</h4>
                  </div>
                  <div className='instagram-container'>
                    <h4 className='method instagram'>/davidj_fertitta/</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
