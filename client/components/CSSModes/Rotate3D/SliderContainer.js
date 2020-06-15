import React from 'react';
import SliderContainerTemplate from '../../templates/SliderContainerTemplate';

const SliderContainer = (props) => {
  const {
    x,
    y,
    z,
    angle,
    handleX,
    handleY,
    handleZ,
    handleAngle,
    handleReset,
  } = props;

  // TODO: get numbers to display on slider labels

  return (
    <SliderContainerTemplate handleReset={handleReset}>
      <p>
        (Hint: move the angle slider before playing around with X, Y, and Z!)
      </p>
      <div className="slider-div">
        <p>X Rotation: {x}</p>
        <input
          type="range"
          min="0"
          max="50"
          defaultValue="0"
          value={x}
          onChange={handleX}
          className="slider"
        />
      </div>
      <div className="slider-div">
        <p>Y Rotation: {y}</p>
        <input
          type="range"
          min="0"
          max="50"
          defaultValue="0"
          value={y}
          onChange={handleY}
          className="slider"
        />
      </div>
      <div className="slider-div">
        <p>Z Rotation: {z}</p>
        <input
          type="range"
          min="0"
          max="50"
          defaultValue="0"
          value={z}
          onChange={handleZ}
          className="slider"
        />
      </div>
      <div className="slider-div">
        <p>Angle: {angle}deg</p>
        <input
          type="range"
          min="0"
          max="360"
          defaultValue="0"
          value={angle}
          onChange={handleAngle}
          className="slider"
        />
      </div>
    </SliderContainerTemplate>
  );
};

export default SliderContainer;
