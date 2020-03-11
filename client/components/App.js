import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from 'react-router-dom';
import LoginButtons from './LoginButtons/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Sidebar from './Sidebar/index';
import BoxShadowContainer from '../containers/BoxShadowContainer/index';

// TODO: Refactor app to use React Router for different CSS settings

const App = () => {
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
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
