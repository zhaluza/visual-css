import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CodeContainer from '../../components/CSSModes/Rotate3D/CodeContainer';
import CSSImage from '../../components/CSSModes/Rotate3D/CSSImage';
import SliderContainer from '../../components/CSSModes/Rotate3D/SliderContainer';

const mapStateToProps = (state) => ({
  x: state.rotate3D.x,
  y: state.rotate3D.y,
  z: state.rotate3D.z,
  angle: state.rotate3D.angle,
});

const mapDispatchToProps = (dispatch) => ({
  handleX: (event) => dispatch(actions.handleXRotate3D(event.target.value)),
  handleY: (event) => dispatch(actions.handleYRotate3D(event.target.value)),
  handleZ: (event) => dispatch(actions.handleZRotate3D(event.target.value)),
  handleAngle: (event) =>
    dispatch(actions.handleAngleRotate3D(event.target.value)),
  handleReset: () => dispatch(actions.handleResetRotate3D()),
});

const Rotate3DContainer = (props) => {
  const {
    x,
    y,
    z,
    angle,
    handleX,
    handleY,
    handleZ,
    handleAngle,
    handleReset,
  } = props;
  return (
    <div className="css-mode-container">
      <CSSImage x={x} y={y} z={z} angle={angle} />
      <div className="container-bottom">
        <SliderContainer
          handleX={handleX}
          handleY={handleY}
          handleZ={handleZ}
          handleAngle={handleAngle}
          handleReset={handleReset}
        />
        <CodeContainer x={x} y={y} z={z} angle={angle} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Rotate3DContainer);
