import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CodeContainer from '../../components/CSSModes/BoxShadow/CodeContainer';
import CSSImage from '../../components/CSSModes/BoxShadow/CSSImage';
import SliderContainer from '../../components/CSSModes/BoxShadow/SliderContainer';

const mapStateToProps = (state) => ({
  posX: state.boxShadow.posX,
  posY: state.boxShadow.posY,
  spread: state.boxShadow.spread,
  blur: state.boxShadow.blur,
  opacity: state.boxShadow.opacity,
  inset: state.boxShadow.inset,
  boxColor: state.boxColor.backgroundColor,
});

const mapDispatchToProps = (dispatch) => ({
  handleXPosition: (event) => dispatch(actions.handleXPositionBoxShadow(event.target.value)),
  handleYPosition: (event) => dispatch(actions.handleYPositionBoxShadow(event.target.value)),
  handleSpread: (event) => dispatch(actions.handleSpreadBoxShadow(event.target.value)),
  handleBlur: (event) => dispatch(actions.handleBlurBoxShadow(event.target.value)),
  handleOpacity: (event) => dispatch(actions.handleOpacityBoxShadow(event.target.value)),
  toggleInset: (event) => dispatch(actions.toggleInsetBoxShadow(event.target.checked)),
  handleReset: () => dispatch(actions.handleResetBoxShadow()),
  handleBoxColor: (color) => dispatch(actions.handleBoxColor(color)),
  resetBoxColor: () => dispatch(actions.resetBoxColor()),
});

const BoxShadowContainer = (props) => {
  return (
    <div className="css-mode-container">
      <CSSImage
        posX={props.posX}
        posY={props.posY}
        spread={props.spread}
        blur={props.blur}
        opacity={props.opacity}
        inset={props.inset}
        boxColor={props.boxColor}
      />
      <div className="container-bottom">
        <SliderContainer
          handleXPosition={props.handleXPosition}
          handleYPosition={props.handleYPosition}
          handleSpread={props.handleSpread}
          handleBlur={props.handleBlur}
          handleOpacity={props.handleOpacity}
          toggleInset={props.toggleInset}
          handleReset={props.handleReset}
          posX={props.posX}
          posY={props.posY}
          spread={props.spread}
          blur={props.blur}
          opacity={props.opacity}
          inset={props.inset}
          boxColor={props.boxColor}
          handleBoxColor={props.handleBoxColor}
          resetBoxColor={props.resetBoxColor}
        />
        <CodeContainer
          posX={props.posX}
          posY={props.posY}
          spread={props.spread}
          blur={props.blur}
          opacity={props.opacity}
          inset={props.inset}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxShadowContainer);
