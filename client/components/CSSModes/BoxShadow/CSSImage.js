import React from 'react';
import CSSImageTemplate from '../../templates/CSSImageTemplate';

const CSSImage = (props) => {
  const { posX, posY, spread, blur, inset, boxColor, shadowColor } = props;
  console.log(boxColor);

  const squareStyle = {
    boxShadow: `${inset ? 'inset' : ''} ${posX}px ${posY}px ${blur}px ${spread}px rgba(${
      shadowColor.r
    }, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a})`,
    backgroundColor: `rgba(${boxColor.r}, ${boxColor.g}, ${boxColor.b}, ${boxColor.a})`,
  };

  return <CSSImageTemplate styleProps={squareStyle} />;
};

export default CSSImage;
