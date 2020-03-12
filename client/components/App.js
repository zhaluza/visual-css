import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from 'react-router-dom';
import LoginButtons from './LoginButtons/index';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Sidebar from './Sidebar/index';
import BoxShadowContainer from '../containers/BoxShadowContainer/index';

// TODO: Refactor app to use React Router for different CSS settings
// TODO: Fix crash on signin/signup routes
// TODO: Add favorites list

const mapStateToProps = state => ({
  user: state.userInfo.user,
  signUpUsername: state.userInfo.signUpUsername,
  signUpEmail: state.userInfo.signUpEmail,
  signUpPassword: state.userInfo.signUpPassword,
  signInUsername: state.userInfo.signInUsername,
  signInEmail: state.userInfo.signInEmail,
  signInPassword: state.userInfo.signInPassword
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signIn: () => dispatch(actions.signIn()),
  signUp: (...args) => {
    dispatch(actions.signUp(...args));
  },
  handleSignUpUsername: e =>
    dispatch(actions.handleSignUpUsername(e.target.value)),

  handleSignUpEmail: e => dispatch(actions.handleSignUpEmail(e.target.value)),

  handleSignUpPassword: e =>
    dispatch(actions.handleSignUpPassword(e.target.value))
});

const App = props => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content-container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signin">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            <p>Log Out</p>
          </nav>
          <Switch>
            <Route exact path="/">
              <BoxShadowContainer />
            </Route>
            <Route exact path="/signin">
              <SignIn signIn={props.signIn} />
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
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
