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

const mapStateToProps = state => {
  user: state.user.user;
};

const mapDispatchToProps = dispatch => {
  signIn: () => dispatch(actions.signIn());
  signUp: () => dispatch(actions.signUp());
};

const App = props => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content-container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <BoxShadowContainer />
            </Route>
            <Route exact path="/signin">
              <SignIn signIn={props.signIn} />
            </Route>
            <Route exact path="/signup">
              <SignUp signUp={props.signUp} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
