import React, { Fragment } from 'react';
import './signin.scss';

const SignIn = props => {
  const { email, password, handleEmail, handlePassword, signIn } = props;

  return (
    <Fragment>
      <h1>Sign In</h1>
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button
          className="btn"
          onClick={e => {
            e.preventDefault();
            signIn({ email, password });
          }}
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};
export default SignIn;
