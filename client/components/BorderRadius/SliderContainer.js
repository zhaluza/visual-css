import React, { useState } from 'react';

const SliderContainer = (props) => {
  const { pixels, percent, handlePixels, handlePercents } = props;

  return (
    <div className="slider-container">
      <div className="slider-div">
        <p>Border Radius (pixels): {pixels}px</p>
        <input
          type="range"
          min="0"
          max="100"
          value={pixels}
          onChange={handlePixels}
          className="slider"
        />
      </div>

      <div className="slider-div">
        <p>Border Radius (percent): {percent}%</p>
        <input
          type="range"
          min="0"
          max="100"
          value={percent}
          onChange={handlePercents}
          className="slider"
        />
      </div>
      <button className="btn">Reset</button>
    </div>
  );
};

export default SliderContainer;
