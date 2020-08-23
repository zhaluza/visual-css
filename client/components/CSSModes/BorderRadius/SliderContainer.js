import React, { useState } from 'react';
import SliderContainerTemplate from '../../templates/SliderContainerTemplate';

const SliderContainer = (props) => {
  const {
    pixels,
    percent,
    handlePixels,
    handlePercents,
    handleReset,
    togglePixels,
    setTogglePixels,
  } = props;

  return (
    <SliderContainerTemplate handleReset={handleReset}>
      {togglePixels ? (
        <div className="slider-div">
          <p>Border Radius: {pixels}px</p>
          <input
            type="range"
            min="0"
            max="100"
            value={pixels}
            onChange={handlePixels}
            className="slider"
          />
        </div>
      ) : (
        <div className="slider-div">
          <p>Border Radius: {percent}%</p>
          <input
            type="range"
            min="0"
            max="50"
            value={percent}
            onChange={handlePercents}
            className="slider"
          />
        </div>
      )}
      <div
        className="toggle-container"
        onClick={() => {
          setTogglePixels((prevState) => !prevState);
          handleReset();
        }}
      >
        <button className={`toggle-btn ${togglePixels ? '' : 'toggle-left'}`}>
          {togglePixels ? 'Pixels' : 'Percent'}
        </button>
      </div>
    </SliderContainerTemplate>
  );
};

export default SliderContainer;
