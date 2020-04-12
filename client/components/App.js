import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt,
} from 'react-router-dom';
import LoginButtons from './LoginButtons/index';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Sidebar from './Sidebar/index';
import BoxShadowContainer from '../containers/BoxShadowContainer/index';
import BorderRadiusContainer from '../containers/BorderRadiusContainer/BorderRadiusContainer';

// TODO: Add state for CSS settings (border-radius/box shadow)
// TODO: Refactor app to use React Router for different CSS settings
// TODO: Fix crash on signin/signup routes
// TODO: Add favorites list

const mapStateToProps = (state) => ({
  mode: state.mode.mode,
  user: state.userInfo.user,
  signUpUsername: state.userInfo.signUpUsername,
  signUpEmail: state.userInfo.signUpEmail,
  signUpPassword: state.userInfo.signUpPassword,
  signInUsername: state.userInfo.signInUsername,
  signInEmail: state.userInfo.signInEmail,
  signInPassword: state.userInfo.signInPassword,
  isLoggedIn: state.userInfo.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  setBoxShadowMode: () => dispatch(actions.setBoxShadowMode()),
  setBorderRadiusMode: () => dispatch(actions.setBorderRadiusMode()),
  signIn: (...args) => dispatch(actions.signIn(...args)),
  signUp: (...args) => {
    dispatch(actions.signUp(...args));
  },
  handleSignUpUsername: (e) =>
    dispatch(actions.handleSignUpUsername(e.target.value)),

  handleSignUpEmail: (e) => dispatch(actions.handleSignUpEmail(e.target.value)),

  handleSignUpPassword: (e) =>
    dispatch(actions.handleSignUpPassword(e.target.value)),
  handleSignInUsername: (e) =>
    dispatch(actions.handleSignInUsername(e.target.value)),

  handleSignInEmail: (e) => dispatch(actions.handleSignInEmail(e.target.value)),

  handleSignInPassword: (e) =>
    dispatch(actions.handleSignInPassword(e.target.value)),
});

const App = (props) => {
  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <Router>
      <div className="app">
        <Sidebar
          setBoxShadowMode={props.setBoxShadowMode}
          setBorderRadiusMode={props.setBorderRadiusMode}
        />
        <div className="content-container">
          <nav>
            <Link to="/">Home</Link>
            {!props.isLoggedIn && <Link to="/signin">Log In</Link>}
            {props.isLoggedIn && <p>Favorites</p>}
            <Link to="/signup">Sign Up</Link>
            <p>Log Out</p>
          </nav>
          <Switch>
            <Route exact path="/">
              {props.mode === 'box-shadow' && <BoxShadowContainer />}
              {props.mode === 'border-radius' && <BorderRadiusContainer />}
            </Route>
            <Route exact path="/signin">
              <SignIn
                signIn={props.signIn}
                username={props.signInUsername}
                email={props.signInEmail}
                password={props.signInPassword}
                handleUsername={props.handleSignInUsername}
                handleEmail={props.handleSignInEmail}
                handlePassword={props.handleSignInPassword}
                isLoggedIn={props.isLoggedIn}
              />
            </Route>
            <Route exact path="/signup">
              <SignUp
                username={props.signUpUsername}
                email={props.signUpEmail}
                password={props.signUpPassword}
                handleUsername={props.handleSignUpUsername}
                handleEmail={props.handleSignUpEmail}
                handlePassword={props.handleSignUpPassword}
                signUp={props.signUp}
                isLoggedIn={props.isLoggedIn}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
