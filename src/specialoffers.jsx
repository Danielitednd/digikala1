import React, { useState, useEffect } from 'react';
import './specialoffers.css';
//import exampleImage from './assets/example.png'; // Replace with your images

function SpecialOffers() {
    const convertToPersianNumbers = (num) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, (d) => persianDigits[d]);
    };
    
    const calculateTimeLeft = () => {
        let now = new Date().getTime();
        let targetTime = localStorage.getItem('targetTime');
        if (!targetTime) {
            targetTime = now + 10 * 60 * 60 * 1000; // 10 hours in milliseconds
            localStorage.setItem('targetTime', targetTime);
        }

        let difference = targetTime - now;
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { h: 0, m: 0, s: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { h, m, s } = timeLeft;

    return (
        <div className="special-offers-container">
            {/* Horizontal Scrollable Section */}
            <div className="offers-scroll">
                {/* Button 1 */}
                <button className="offer-button">
                    {/* <img src={exampleImage} alt="Offer 1" className="offer-image" /> */}
                    <p className="offer-line">Offer 1 Line 1</p>
                    <p className="offer-line">Offer 1 Line 2</p>
                    <p className="offer-line">Offer 1 Line 3</p>
                </button>
                {/* Repeat for other buttons */}
                <button className="offer-button">
                    {/* <img src={exampleImage} alt="Offer 2" className="offer-image" /> */}
                    <p className="offer-line">Offer 2 Line 1</p>
                    <p className="offer-line">Offer 2 Line 2</p>
                    <p className="offer-line">Offer 2 Line 3</p>
                </button>
                {/* Add more buttons as needed */}
                
            </div>
            
            {/* Countdown Button */}
            <button className="countdown-button">
                <p className="countdown-top">پیشنهاد <br /> شگفت <br /> انگیز</p>
                <p className="countdown-timer">
                    <span className="time-box">{convertToPersianNumbers(h)}</span>: 
                    <span className="time-box">{convertToPersianNumbers(m)}</span>: 
                    <span className="time-box">{convertToPersianNumbers(s)}</span>
                </p>
                <p className="countdown-bottom">%</p>
                <p className="countdown-bottom2">&lt; مشاهده همه</p>
            </button>
        </div>
    );
}

export default SpecialOffers;
