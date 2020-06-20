import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

import Sidebar from './components/Sidebar';
import BoxShadowContainer from './containers/BoxShadowContainer';
import BorderRadiusContainer from './containers/BorderRadiusContainer';
import Rotate3DContainer from './containers/Rotate3DContainer';

// TODO: Finish Rotate3D feature
// TODO: Implement authentication properly
// TODO: Add favorites list for users

const mapStateToProps = (state) => ({
  mode: state.mode.mode,
});

const mapDispatchToProps = (dispatch) => ({
  setBoxShadowMode: () => dispatch(actions.setBoxShadowMode()),
  setBorderRadiusMode: () => dispatch(actions.setBorderRadiusMode()),
  setRotate3DMode: () => dispatch(actions.setRotate3DMode()),
});

const App = (props) => {
  return (
    <div className="app">
      <Sidebar
        setBoxShadowMode={props.setBoxShadowMode}
        setBorderRadiusMode={props.setBorderRadiusMode}
        setRotate3DMode={props.setRotate3DMode}
      />
      <div className="content-container">
        {props.mode === 'box-shadow' && <BoxShadowContainer />}
        {props.mode === 'border-radius' && <BorderRadiusContainer />}
        {props.mode === 'rotate-3d' && <Rotate3DContainer />}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
