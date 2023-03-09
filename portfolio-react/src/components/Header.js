import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

const styles = {
  h1: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    headerTransparent: true,
    backgroundColor: 'transparent'

  }
}

function Header() {

  return (
    <React.Fragment>
      <header id='home'>
        <nav id='nav-wrap'>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothcontrol' href='#home'>Home</a>
          </li>
          <li className='current'>
            <a className='smoothcontrol' href='#about'>About</a>
          </li>
          <li className='current'>
            <a className='smoothcontrol' href='#portfolio'>Portfolio</a>
          </li>
          <li className='current'>
            <a className='smoothcontrol' href='#contact'>Contact</a>
          </li>
          <li className='current'>
            <a className='smoothcontrol' href='#resume'>Resume</a>
          </li>
          
        </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline' style={styles.h1}>I am Luis Chevere.</h1>
            <h3 style={styles.h1}>
              I'm a 34 year old coding student at UTSA. Web Development has changed the way I think and it has been a fantastic journey. I am always looking for new things to learn and work with. My specialty is Front-End Web Development.
            </h3>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
