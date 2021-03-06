import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import SliderContainerTemplate from '../../templates/SliderContainerTemplate';

const SliderContainer = (props) => {
  const { posX, posY, spread, blur, opacity, inset } = props;
  const {
    handleXPosition,
    handleYPosition,
    handleSpread,
    handleBlur,
    handleOpacity,
    handleReset,
    toggleInset,
  } = props;

  const [displayPicker, setDisplayPicker] = useState(false);

  const toggleDivStyling = {
    display: 'flex',
    alignItems: 'center',
  };

  const toggleInsetSpacing = {
    marginLeft: '.5rem',
  };

  return (
    <SliderContainerTemplate handleReset={handleReset}>
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

      <div className="toggle-div" style={toggleDivStyling}>
        <label>Toggle Inset</label>
        <input type="checkbox" onChange={toggleInset} checked={inset} style={toggleInsetSpacing} />
      </div>
      {displayPicker ? <ChromePicker /> : <button className="btn btn-2">choose color</button>}
    </SliderContainerTemplate>
  );
};

export default SliderContainer;
