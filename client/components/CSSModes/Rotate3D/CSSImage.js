import React from 'react';
import CSS3DImageTemplate from '../../templates/CSS3DImageTemplate';

const CSSImage = (props) => {
  const { x, y, z, angle } = props;

  const rotate3DStyle = {
    transform: `rotate3d(${x}, ${y}, ${z}, ${angle}deg)`,
    // perspective: '800px',
  };
  return <CSS3DImageTemplate styleProps={rotate3DStyle} />;
};

export default CSSImage;
