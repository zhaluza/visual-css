import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CodeContainer from '../../components/BoxShadow/CodeContainer/index';
import CSSImage from '../../components/BoxShadow/CSSImage/index';
import SliderContainer from '../../components/BoxShadow/SliderContainer/index';

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
    dispatch(actions.handleXPosition(event.target.value)),
  handleYPosition: event =>
    dispatch(actions.handleYPosition(event.target.value)),
  handleSpread: event => dispatch(actions.handleSpread(event.target.value)),
  handleBlur: event => dispatch(actions.handleBlur(event.target.value)),
  handleOpacity: event => dispatch(actions.handleOpacity(event.target.value)),
  toggleInset: event => dispatch(actions.toggleInset(event.target.checked)),
  handleReset: () => dispatch(actions.handleReset())
});

const BoxShadowContainer = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxShadowContainer);
