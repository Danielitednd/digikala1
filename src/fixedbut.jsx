import React, {useState} from 'react';
import './fixedbut.css';
import contact from './assets/contact.png';
import bbbasket from './assets/bbbasket.png';

function FixedButtons() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <button
      className="fixed-button-left"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={bbbasket} alt="bbbasket" className="bbbasket-icon" />
      <span className="button-textt">
        {hovered ? 'سوپرمارکت تنوع بالا و پرتخفیف' : 'سوپرمارکت'}
      </span>
    </button>
      <button className="fixed-button-right">
        <img src={contact} alt="contact" className="contact-icon" />
      </button>
    </>
  );
}

export default FixedButtons;
