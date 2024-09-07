import React, { useState, useEffect } from 'react';
import spotImage from './assets/spot.jpg';
import panterImage from './assets/panter.png'; // Import the panter image

function HeaderOne() {
  const [text, setText] = useState('کنار ماست panter امسال');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => 
        prevText === 'کنار ماست panter امسال' 
          ? 'زنگ تخفیف دیجی کالا' 
          : 'کنار ماست panter امسال'
      );
    }, 1000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <>
      <header className="fixed-header" style={{ backgroundImage: `url(${spotImage})` }}>
        <p className="headerp">
          {text === 'کنار ماست panter امسال' ? (
            <>
              کنار ماست <img src={panterImage} alt="Panter" className="panter-image" />
            </>
          ) : (
            text
          )}
        </p>
      </header>
    </>
  );
}

export default HeaderOne;