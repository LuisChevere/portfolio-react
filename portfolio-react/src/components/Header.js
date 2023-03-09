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
    <header className="header" style={styles.header}>
      <h1 style={styles.h1}>Luis Chevere</h1>
    </header>
  );
}

export default Header;
