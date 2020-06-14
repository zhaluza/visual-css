import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CodeContainer from '../../components/CSSModes/Rotate3D/CodeContainer';
import CSSImage from '../../components/CSSModes/Rotate3D/CSSImage';
import SliderContainer from '../../components/Rotate3D/3DRotate/SliderContainer';

const Rotate3DContainer = (props) => {
  return (
    <div className="css-mode-container">
      <CSSImage />
      <div className="container-bottom">
        <SliderContainer />
        <CodeContainer />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Rotate3DContainer);
