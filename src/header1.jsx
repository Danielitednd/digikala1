import React, { useState, useEffect } from 'react';
import spotImage from './assets/spot.jpg';
import panterImage from './assets/panter.png';
import digilogoImage from './assets/digilogo.png'; // Import the logo image
import magnifier from './assets/magnifier.png';
import bbasket from './assets/bbasket.png';

function HeaderOne() {
  const [text, setText] = useState('کنار ماست panter امسال');
  const [showThirdHeader, setShowThirdHeader] = useState(true); // Initially show the third header
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => 
        prevText === 'کنار ماست panter امسال' 
          ? 'زنگ تخفیف دیجی کالا هرچی که جاش خالیه تا %70 تخفیف' 
          : 'کنار ماست panter امسال'
      );
    }, 1000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY === 0) {
        setShowThirdHeader(true); // Show the third header when at the top
      } else {
        setShowThirdHeader(false); // Hide it when scrolling down
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed-header" style={{ backgroundImage: `url(${spotImage})` }}>
        <p className="headerp">
          {text === 'کنار ماست panter امسال' ? (
            <>
              امسال <img src={panterImage} alt="Panter" className="panter-image" /> کنار ماست
            </>
          ) : (
            <>
              زنگ تخفیف دیجی کالا <span className="red-box">هرچی که جاش خالیه</span> تا %70 تخفیف
            </>
          )}
        </p>
      </header>

      <header className="fixed-header2">
        <div className="left-section">
          <button className="header-button">
            <img src={bbasket} alt="Search" className="bbasket-icon" />
          </button>
          <div className="divider"></div>
          <button className="header-button2">Button 2</button>
        </div>
        <div className="right-section">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="جستجو"
          />
          <button className="search-button">
            <img src={magnifier} alt="Search" className="magnifier-icon" />
          </button>
        </div>
          <button onClick={handleLogoClick} className="logo-button">
            <img src={digilogoImage} alt="DigiKala Logo" className="logo-image" />
          </button>
        </div>
      </header>
      {showThirdHeader && (
        <header className="third-header">
          <p>Third Header Content</p>
        </header>
      )}
    </>
  );
}

export default HeaderOne;
