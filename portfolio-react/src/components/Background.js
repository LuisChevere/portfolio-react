import React from "react";
import Backdrop from '../images/backdropReact.jpeg';

function Background() {
    return (
      <div style={{ backgroundImage: `url(${Backdrop})` }}>
        Hello World
      </div>
    );
  }
  
  export default Background;