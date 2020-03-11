import React from 'react';
import './sliderContainer.scss';

const SliderContainer = props => {
  return (
    <div className="slider-container">
      <input type="range" min="1" max="100" value="50" className="slider" />
      <input type="range" min="1" max="100" value="50" className="slider" />
    </div>
  );
};

export default SliderContainer;
