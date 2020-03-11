import React from 'react';
import './sliderContainer.scss';

// TODO: add color picking option

const SliderContainer = props => {
  return (
    <div className="slider-container">
      <div className="slider-div">
        <p>Position X</p>
        <input type="range" min="-200" max="200" value="0" className="slider" />
      </div>

      <div className="slider-div">
        <p>Position Y</p>
        <input type="range" min="-200" max="200" value="0" className="slider" />
      </div>

      <div className="slider-div">
        <p>Blur</p>
        <input type="range" min="1" max="100" value="50" className="slider" />
      </div>

      <div className="slider-div">
        <p>Spread</p>
        <input type="range" min="1" max="100" value="50" className="slider" />
      </div>

      <label>Toggle Inset</label>
      <input type="checkbox" />
    </div>
  );
};

export default SliderContainer;
