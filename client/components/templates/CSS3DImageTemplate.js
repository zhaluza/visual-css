import React, { Fragment } from 'react';

const CSSImageTemplate = (props) => {
  return (
    <Fragment>
      <div className="cube" style={props.styleProps}>
        <div className="cube__face cube__face-front">
          <p>Front</p>
        </div>
        <div className="cube__face cube__face-back">
          <p>Back</p>
        </div>
        <div className="cube__face cube__face-right">
          <p>Right</p>
        </div>
        <div className="cube__face cube__face-left">
          <p>Left</p>
        </div>
        <div className="cube__face cube__face-top">
          <p>Top</p>
        </div>
        <div className="cube__face cube__face-bottom">
          <p>Bottom</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CSSImageTemplate;
