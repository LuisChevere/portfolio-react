import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      {/* <Portfolio />
      <Contact />
      <Resume /> */}
      {/* <Navbar/> */}
      <Footer />
    </div>
  );
}

export default App;
