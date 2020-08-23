import React from 'react';
import CSSImageTemplate from '../../templates/CSSImageTemplate';

const CSSImage = ({ pixels, percent, togglePixels }) => {
  const pixelStyle = {
    borderRadius: `${pixels}px`,
  };

  const percentStyle = {
    borderRadius: `${percent}%`,
  };
  return <CSSImageTemplate styleProps={togglePixels ? pixelStyle : percentStyle} />;
};

export default CSSImage;
