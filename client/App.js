import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

import Burger from './components/Burger';
import Sidebar from './components/Sidebar';
import BoxShadowContainer from './containers/BoxShadowContainer';
import BorderRadiusContainer from './containers/BorderRadiusContainer';
import Rotate3DContainer from './containers/Rotate3DContainer';
import Spinner from './components/Spinner';

const mapStateToProps = (state) => ({
  mode: state.mode.mode,
});

const mapDispatchToProps = (dispatch) => ({
  setBoxShadowMode: () => dispatch(actions.setBoxShadowMode()),
  setBorderRadiusMode: () => dispatch(actions.setBorderRadiusMode()),
  setRotate3DMode: () => dispatch(actions.setRotate3DMode()),
});

const App = (props) => {
  // handle burger menu for mobile devices
  // mobile settings are active by default
  const [isMobile, setIsMobile] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // close navbar on mobile if user taps elsewhere
  const closeNav = () => {
    if (isMobile && menuOpen) {
      setMenuOpen(false);
    }
  };

  // use burger menu for screen sizes smaller than 700px
  useEffect(() => {
    if (window.innerWidth > 700) {
      setIsMobile(false);
      setMenuOpen(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          {isMobile && <Burger menuOpen={menuOpen} toggleMenu={toggleMenu} />}
          <Sidebar
            isMobile={isMobile}
            menuOpen={menuOpen}
            mode={props.mode}
            setBoxShadowMode={props.setBoxShadowMode}
            setBorderRadiusMode={props.setBorderRadiusMode}
            setRotate3DMode={props.setRotate3DMode}
          />
          <div className="content-container" onClick={() => closeNav()}>
            {props.mode === 'box-shadow' && <BoxShadowContainer />}
            {props.mode === 'border-radius' && <BorderRadiusContainer />}
            {props.mode === 'rotate-3d' && <Rotate3DContainer />}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
