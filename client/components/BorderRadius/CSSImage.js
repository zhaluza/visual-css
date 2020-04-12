import React, { Fragment } from 'react';

const CSSImage = (props) => {
  const { pixels, percent } = props;

  const pixelStyle = {
    borderRadius: `${pixels}px`,
  };

  const percentStyle = {
    borderRadius: `${percent}%`,
  };
  return (
    <Fragment>
      <div className="square" style={pixelStyle}></div>
    </Fragment>
  );
};

export default CSSImage;
