import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CodeContainer from '../../components/BoxShadow/CodeContainer/index';
import CSSImage from '../../components/BoxShadow/CSSImage/index';
import SliderContainer from '../../components/BoxShadow/SliderContainer/index';
import './boxShadowContainer.scss';

const mapStateToProps = state => ({
  posX: state.boxShadow.posX,
  posY: state.boxShadow.posY,
  spread: state.boxShadow.spread,
  blur: state.boxShadow.blur,
  opacity: state.boxShadow.opacity,
  inset: state.boxShadow.inset
});

const mapDispatchToProps = dispatch => ({
  handleXPosition: event =>
    dispatch(actions.handleXPositionBoxShadow(event.target.value)),
  handleYPosition: event =>
    dispatch(actions.handleYPositionBoxShadow(event.target.value)),
  handleSpread: event =>
    dispatch(actions.handleSpreadBoxShadow(event.target.value)),
  handleBlur: event =>
    dispatch(actions.handleBlurBoxShadow(event.target.value)),
  handleOpacity: event =>
    dispatch(actions.handleOpacityBoxShadow(event.target.value)),
  toggleInset: event =>
    dispatch(actions.toggleInsetBoxShadow(event.target.checked)),
  handleReset: () => dispatch(actions.handleResetBoxShadow())
});

const BoxShadowContainer = props => {
  return (
    <div className="box-shadow-container">
      <CSSImage
        posX={props.posX}
        posY={props.posY}
        spread={props.spread}
        blur={props.blur}
        opacity={props.opacity}
        inset={props.inset}
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
