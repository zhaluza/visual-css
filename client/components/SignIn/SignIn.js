import React, { Fragment } from 'react';
import './signin.scss';

const SignIn = props => {
  return (
    <Fragment>
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};
export default SignIn;
