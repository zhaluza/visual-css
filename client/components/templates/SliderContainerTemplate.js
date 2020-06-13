import React, { useState } from 'react';

const SliderContainerTemplate = (props) => {
  return (
    <div className="slider-container">
      {props.children}

      <button onClick={props.handleReset} className="btn">
        Reset
      </button>
    </div>
  );
};

export default SliderContainerTemplate;
