import React, { Fragment } from 'react';

const CSSImageTemplate = (props) => {
  return (
    <Fragment>
      <div className="square" style={props.styleProps}></div>
    </Fragment>
  );
};

export default CSSImageTemplate;
