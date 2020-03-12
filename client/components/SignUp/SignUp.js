import React, { Fragment } from 'react';
import './signup.scss';

const SignUp = props => {
  const { username, email, password } = props;
  const { handleUsername, handleEmail, handlePassword, signUp } = props;
  return (
    <Fragment>
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
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
            signUp({ username, email, password });
          }}
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};
export default SignUp;
