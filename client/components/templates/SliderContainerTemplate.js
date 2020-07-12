import React from 'react';

const SliderContainerTemplate = (props) => {
  return (
    <div className="slider-container">
      {props.children}

      <button onClick={props.handleReset} className="btn btn-2">
        Reset
      </button>
    </div>
  );
};

export default SliderContainerTemplate;
