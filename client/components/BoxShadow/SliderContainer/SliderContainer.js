import React from 'react';
import './sliderContainer.scss';

// TODO: add color picking option

const SliderContainer = props => {
  const { posX, posY, spread, blur, opacity, inset } = props;
  const {
    handleXPosition,
    handleYPosition,
    handleSpread,
    handleBlur,
    handleOpacity,
    toggleInset
  } = props;

  return (
    <div className="slider-container">
      <div className="slider-div">
        <p>Position X</p>
        <input
          type="range"
          min="-200"
          max="200"
          value={posX}
          onChange={handleXPosition}
          className="slider"
        />
        <p>{posX}px</p>
      </div>

      <div className="slider-div">
        <p>Position Y</p>
        <input
          type="range"
          min="-200"
          max="200"
          value={posY}
          onChange={handleYPosition}
          className="slider"
        />
        <p>{posY}px</p>
      </div>

      <div className="slider-div">
        <p>Blur</p>
        <input
          type="range"
          min="0"
          max="100"
          value={blur}
          onChange={handleBlur}
          className="slider"
        />
        <p>{blur}px</p>
      </div>

      <div className="slider-div">
        <p>Spread</p>
        <input
          type="range"
          min="0"
          max="100"
          value={spread}
          onChange={handleSpread}
          className="slider"
        />
        <p>{spread}px</p>
      </div>

      <div className="slider-div">
        <p>Opacity</p>
        <input
          type="range"
          min="0"
          max="100"
          value={opacity * 100}
          onChange={handleOpacity}
          className="slider"
        />
        <p>{opacity}</p>
      </div>

      <label>Toggle Inset</label>
      <input type="checkbox" value={inset} onChange={toggleInset} />
    </div>
  );
};

export default SliderContainer;
