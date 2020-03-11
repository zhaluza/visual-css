import React, { Fragment } from 'react';
import './cssImage.scss';

const CSSImage = props => {
  const { posX, posY, spread, blur, inset, opacity } = props;

  const squareStyle = {
    boxShadow: `${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`
  };

  const squareStyleInset = {
    boxShadow: `inset ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`
  };
  return (
    <Fragment>
      <div
        className="square"
        style={inset ? squareStyleInset : squareStyle}
      ></div>
    </Fragment>
  );
};

export default CSSImage;
