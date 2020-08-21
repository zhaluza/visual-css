import React, { useState, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import SliderContainerTemplate from '../../templates/SliderContainerTemplate';

// TODO: add color picking option for shadow

const SliderContainer = (props) => {
  const { posX, posY, spread, blur, opacity, inset, boxColor } = props;
  const {
    handleXPosition,
    handleYPosition,
    handleSpread,
    handleBlur,
    handleOpacity,
    handleReset,
    toggleInset,
    handleBoxColor,
    resetBoxColor,
  } = props;

  const [displayPicker, setDisplayPicker] = useState(false);

  const toggleDivStyling = {
    display: 'flex',
    alignItems: 'center',
  };

  const toggleInsetSpacing = {
    marginLeft: '.5rem',
  };

  const resetBoxColorAndSettings = () => {
    handleReset();
    resetBoxColor();
  };

  return (
    <SliderContainerTemplate handleReset={resetBoxColorAndSettings}>
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
      {displayPicker ? (
        <Fragment>
          <SketchPicker color={boxColor} onChange={(color) => handleBoxColor(color.hex)} />
          <button className="btn btn-2" onClick={() => setDisplayPicker(false)}>
            Close color picker
          </button>
        </Fragment>
      ) : (
        <button className="btn btn-2" onClick={() => setDisplayPicker(true)}>
          Change box color
        </button>
      )}
    </SliderContainerTemplate>
  );
};

export default SliderContainer;
