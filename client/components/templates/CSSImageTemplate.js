import React, { Fragment } from 'react';

const CSSImage = (props) => {
  return (
    <Fragment>
      <div className="square" style={props.styleProps}></div>
    </Fragment>
  );
};

export default CSSImage;
