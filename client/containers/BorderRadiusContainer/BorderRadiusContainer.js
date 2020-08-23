import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CodeContainer from '../../components/CSSModes/BorderRadius/CodeContainer';
import CSSImage from '../../components/CSSModes/BorderRadius/CSSImage';
import SliderContainer from '../../components/CSSModes/BorderRadius/SliderContainer';

const mapStateToProps = (state) => ({
  pixels: state.borderRadius.pixels,
  percent: state.borderRadius.percent,
});

const mapDispatchToProps = (dispatch) => ({
  handlePixels: (event) => dispatch(actions.handlePixelsBorderRadius(event.target.value)),
  handlePercents: (event) => dispatch(actions.handlePercentsBorderRadius(event.target.value)),
  handleReset: () => dispatch(actions.handleResetBorderRadius()),
});

const BorderRadiusContainer = ({ pixels, percent, handlePixels, handlePercents, handleReset }) => {
  const [togglePixels, setTogglePixels] = useState(true);
  return (
    <div className="css-mode-container">
      <CSSImage pixels={pixels} percent={percent} togglePixels={togglePixels} />
      <div className="container-bottom">
        <SliderContainer
          pixels={pixels}
          percent={percent}
          handlePixels={handlePixels}
          handlePercents={handlePercents}
          handleReset={handleReset}
          togglePixels={togglePixels}
          setTogglePixels={setTogglePixels}
        />
        <CodeContainer pixels={pixels} percent={percent} togglePixels={togglePixels} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BorderRadiusContainer);
