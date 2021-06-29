import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              DF <i className='logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? ' fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item-home'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className='nav-item-about'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className='nav-item-resume'>
                <Link
                  to='/resume'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  RESUME
                </Link>
              </li>
              <li className='nav-item-projects'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  PROJECTS
                </Link>
              </li>
              <li className='nav-item-blogs'>
                <Link
                  to='/blogs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  BLOGS
                </Link>
              </li>
              <li className='nav-item-contact'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
