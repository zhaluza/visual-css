import React from 'react';
import SliderContainerTemplate from '../templates/SliderContainerTemplate';

const SliderContainer = (props) => {
  const { pixels, percent, handlePixels, handlePercents, handleReset } = props;

  return (
    <SliderContainerTemplate handleReset={handleReset}>
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
    </SliderContainerTemplate>
  );
};

export default SliderContainer;
