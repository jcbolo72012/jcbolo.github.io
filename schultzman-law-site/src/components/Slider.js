import React from 'react';
import './Slider.css';

function Slider() {
  return (
    <div className="slider">
      <div className="slide">
        <img src="slide1.jpg" alt="Slide 1" />
        <div className="caption">Injury Lawyers Kaplan & Kaplan P.C.</div>
      </div>
      {/* Add more slides as needed */}
    </div>
  );
}

export default Slider;
