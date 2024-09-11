import React from 'react';
import './buttons.css';
import pic6 from './assets/pic6.webp';
import pic7 from './assets/pic7.webp';
import pic8 from './assets/pic8.webp';
import pic9 from './assets/pic9.webp';

function Buttons() {
  return (
    <div className="container">
      <button className="main-button">Main Button</button>
      <div className="button-row">
        <button className="secondary-button">
          <img src={pic9} alt="pic6" className="pic-icon" />
        </button>
        <button className="secondary-button">
          <img src={pic8} alt="pic7" className="pic-icon" />
        </button>
        <button className="secondary-button">
          <img src={pic7} alt="pic8" className="pic-icon" />
        </button>
        <button className="secondary-button">
          <img src={pic6} alt="pic9" className="pic-icon" />
        </button>
      </div>
    </div>
  );
}

export default Buttons;
