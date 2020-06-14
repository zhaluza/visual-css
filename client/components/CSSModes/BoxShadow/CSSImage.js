import React from 'react';
import CSSImageTemplate from '../../templates/CSSImageTemplate';

const CSSImage = (props) => {
  const { posX, posY, spread, blur, inset, opacity } = props;

  const squareStyle = {
    boxShadow: `${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`,
  };

  const squareStyleInset = {
    boxShadow: `inset ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`,
  };
  return (
    <CSSImageTemplate styleProps={inset ? squareStyleInset : squareStyle} />
  );
};

export default CSSImage;
