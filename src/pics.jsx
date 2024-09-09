import React, { useState, useEffect } from 'react';
import hello from './assets/hello.webp';
import pic2 from './assets/pic2.webp';
import pic3 from './assets/pic3.webp';
import pic4 from './assets/pic4.webp';
import pic5 from './assets/pic5.webp';
import './pics.css';


function Pics() {
  const pictures = [hello, pic2, pic3, pic4, pic5];
  const [currentPic, setCurrentPic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPic(prevPic => (prevPic + 1) % pictures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pictures.length]);
  const goToNext = () => {
    setCurrentPic((prevPic) => (prevPic + 1) % pictures.length);
  };

  const goToPrev = () => {
    setCurrentPic((prevPic) => (prevPic - 1 + pictures.length) % pictures.length);
  };

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
      <div className="button-container">
        <button className="prev-button" onClick={goToPrev}>&lt;</button>
        <button className="next-button" onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Pics;
