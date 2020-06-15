import React from 'react';
import CSSImageTemplate from '../../templates/CSSImageTemplate';

const CSSImage = (props) => {
  const { x, y, z, angle } = props;

  const rotate3DStyle = {
    transform: `rotate3d(${x}, ${y}, ${z}, ${angle}deg)`,
    perspective: '800px',
  };
  return <CSSImageTemplate styleProps={rotate3DStyle} />;
};

export default CSSImage;
