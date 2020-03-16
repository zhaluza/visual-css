import React, { Fragment } from 'react';
import './signup.scss';

const SignUp = props => {
  const { username, email, password } = props;
  const {
    handleUsername,
    handleEmail,
    handlePassword,
    signUp,
    isLoggedIn
  } = props;
  return (
    <Fragment>
      <h1>Sign Up</h1>
      <form>
        <input
          className="info-input"
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          className="info-input"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
        <input
          className="info-input"
          type="password"
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
      {isLoggedIn && <p>Signup successful. You're logged in!</p>}
    </Fragment>
  );
};
export default SignUp;
