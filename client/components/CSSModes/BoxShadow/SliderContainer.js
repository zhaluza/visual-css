import React, { useState, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import SliderContainerTemplate from '../../templates/SliderContainerTemplate';

const SliderContainer = (props) => {
  const { posX, posY, spread, blur, inset, boxColor, shadowColor } = props;
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
    handleBoxShadowColor,
  } = props;
  const opacity = shadowColor.a;

  const [showBoxColorPicker, setShowBoxColorPicker] = useState(false);
  const [showShadowColorPicker, setShowShadowColorPicker] = useState(false);

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
          onChange={(e) =>
            handleBoxShadowColor({
              r: shadowColor.r,
              g: shadowColor.g,
              b: shadowColor.b,
              a: e.target.value / 100,
            })
          }
          className="slider"
        />
      </div>

      <div className="toggle-div" style={toggleDivStyling}>
        <label>Toggle Inset</label>
        <input type="checkbox" onChange={toggleInset} checked={inset} style={toggleInsetSpacing} />
      </div>
      {showShadowColorPicker ? (
        <Fragment>
          <div className="color-picker-container">
            <SketchPicker
              className="color-picker"
              color={shadowColor}
              onChange={(color) => handleBoxShadowColor(color.rgb)}
            />
            <button
              className="btn btn-2 cancel-btn"
              onClick={() => setShowShadowColorPicker(false)}
            >
              Close shadow color picker
            </button>
          </div>
        </Fragment>
      ) : (
        <button
          className="btn btn-2"
          onClick={() => {
            setShowShadowColorPicker(true);
            setShowBoxColorPicker(false);
          }}
        >
          Change box shadow color
        </button>
      )}
      {showBoxColorPicker ? (
        <Fragment>
          <div className="color-picker-container">
            <SketchPicker
              className="color-picker"
              color={boxColor}
              onChange={(color) => handleBoxColor(color.rgb)}
            />
            <button className="btn btn-2 cancel-btn" onClick={() => setShowBoxColorPicker(false)}>
              Close box color picker
            </button>
          </div>
        </Fragment>
      ) : (
        <button
          className="btn btn-2"
          onClick={() => {
            setShowBoxColorPicker(true);
            setShowShadowColorPicker(false);
          }}
        >
          Change box color
        </button>
      )}
    </SliderContainerTemplate>
  );
};

export default SliderContainer;
