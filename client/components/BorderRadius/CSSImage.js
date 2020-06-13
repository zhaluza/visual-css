import React, { Fragment } from 'react';
import CSSImageTemplate from '../templates/CSSImageTemplate';

const CSSImage = (props) => {
  const { pixels, percent } = props;

  const pixelStyle = {
    borderRadius: `${pixels}px`,
  };

  const percentStyle = {
    borderRadius: `${percent}%`,
  };
  return <CSSImageTemplate styleProps={pixelStyle} />;
};

export default CSSImage;
