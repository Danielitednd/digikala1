import React, { useState, useEffect } from 'react';
import hello from './assets/hello.webp';
import pic2 from './assets/pic2.webp';
import pic3 from './assets/pic3.webp';
import pic4 from './assets/pic4.webp';
import './pics.css';

function Pics() {
  const pictures = [hello, pic2, pic3, pic4];
  const [currentPic, setCurrentPic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPic(prevPic => (prevPic + 1) % pictures.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [pictures.length]);

  return (
    <div className="carousel-container">
      <img src={pictures[currentPic]} alt="Slideshow" className="carousel-image" />
      <div className="dots-container">
        {pictures.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPic === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Pics;
