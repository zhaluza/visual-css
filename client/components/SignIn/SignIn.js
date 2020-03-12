import React, { Fragment } from 'react';
import './signin.scss';

const SignIn = props => {
  const {
    username,
    email,
    password,
    handleUsername,
    handleEmail,
    handlePassword,
    signIn,
    isLoggedIn
  } = props;
  const tempMessage = setTimeout(<p>You're logged in!</p>, 3000);
  return (
    <Fragment>
      <h1>Sign In</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="email"
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
            signIn({ username, email, password });
          }}
        >
          Submit
        </button>
      </form>
      {isLoggedIn && <p>You're logged in</p>}
    </Fragment>
  );
};
export default SignIn;
