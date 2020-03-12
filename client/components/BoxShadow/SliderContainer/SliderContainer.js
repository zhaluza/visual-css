import React, { useState } from 'react';
import './sliderContainer.scss';
import { ChromePicker } from 'react-color';

// TODO: add color picking option

const SliderContainer = props => {
  const { posX, posY, spread, blur, opacity, inset } = props;
  const {
    handleXPosition,
    handleYPosition,
    handleSpread,
    handleBlur,
    handleOpacity,
    handleReset,
    toggleInset
  } = props;

  const [displayPicker, setDisplayPicker] = useState(false);

  return (
    <div className="slider-container">
      <div className="slider-div">
        <p>Position X: {posX}px</p>
        <input
          type="range"
          min="-200"
          max="200"
          value={posX}
          onChange={handleXPosition}
          className="slider"
        />
      </div>

      <div className="slider-div">
        <p>Position Y: {posY}px</p>
        <input
          type="range"
          min="-200"
          max="200"
          value={posY}
          onChange={handleYPosition}
          className="slider"
        />
      </div>

      <div className="slider-div">
        <p>Blur: {blur}px</p>
        <input
          type="range"
          min="0"
          max="100"
          value={blur}
          onChange={handleBlur}
          className="slider"
        />
      </div>

      <div className="slider-div">
        <p>Spread: {spread}px</p>
        <input
          type="range"
          min="0"
          max="100"
          value={spread}
          onChange={handleSpread}
          className="slider"
        />
      </div>

      <div className="slider-div">
        <p>Opacity: {Math.floor(opacity * 100)}%</p>
        <input
          type="range"
          min="0"
          max="100"
          value={opacity * 100}
          onChange={handleOpacity}
          className="slider"
        />
      </div>

      <div className="toggle-div">
        <label>Toggle Inset</label>
        <input type="checkbox" onChange={toggleInset} checked={inset} />
      </div>
      {displayPicker ? (
        <ChromePicker />
      ) : (
        <button className="btn">choose color</button>
      )}
      <button onClick={handleReset} className="btn">
        Reset
      </button>
    </div>
  );
};

export default SliderContainer;
