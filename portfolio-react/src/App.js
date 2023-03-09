import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Navbar from './components/Nav';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
        <Background />
      <Header />
      <Navbar/>
      {/* <footer /> */}
    </div>
  );
}

export default App;
