import React, { Fragment } from 'react';
import './signup.scss';

const SignUp = props => {
  return (
    <Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={props.signUp}>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};
export default SignUp;
