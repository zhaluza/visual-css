import * as types from '../constants/actionTypes';

// USER ACTIONS
export function signIn(userInfo) {
  return dispatch => {
    dispatch(signInBegin);
    return fetch('/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(userInfo)
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(signInSuccess(json));
        return json;
      })
      .catch(error => dispatch(signInFailure(error)));
  };
}

export function signUp(userInfo) {
  return dispatch => {
    dispatch(signUpBegin(userInfo));
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch(signUpSuccess(json));
        return json;
      })
      .catch(error => dispatch(signUpFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const signInBegin = () => ({
  type: types.SIGN_IN_BEGIN
});
export const signInSuccess = message => ({
  type: types.SIGN_IN_SUCCESS,
  payload: message
});
export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  payload: error
});

export const signUpBegin = () => ({
  type: types.SIGN_UP_BEGIN
});

export const signUpSuccess = message => ({
  type: types.SIGN_UP_SUCCESS,
  payload: message
});

export const signUpFailure = error => ({
  type: types.SIGN_UP_FAILURE,
  payload: error
});

export const handleSignUpUsername = text => ({
  type: types.HANDLE_SU_USERNAME,
  payload: text
});
export const handleSignUpEmail = text => ({
  type: types.HANDLE_SU_EMAIL,
  payload: text
});
export const handleSignUpPassword = text => ({
  type: types.HANDLE_SU_PASSWORD,
  payload: text
});

export const handleSignInUsername = text => ({
  type: types.HANDLE_SI_USERNAME,
  payload: text
});
export const handleSignInEmail = text => ({
  type: types.HANDLE_SI_EMAIL,
  payload: text
});
export const handleSignInPassword = text => ({
  type: types.HANDLE_SI_PASSWORD,
  payload: text
});

export const logOut = () => ({ type: types.LOG_OUT });

// BOX SHADOW ACTIONS
export const handleXPosition = event => ({
  type: types.HANDLE_X_POSITION,
  payload: event
});

export const handleYPosition = event => ({
  type: types.HANDLE_Y_POSITION,
  payload: event
});

export const handleSpread = event => ({
  type: types.HANDLE_SPREAD,
  payload: event
});

export const handleBlur = event => ({
  type: types.HANDLE_BLUR,
  payload: event
});

export const handleOpacity = event => ({
  type: types.HANDLE_OPACITY,
  payload: event
});

export const toggleInset = event => ({
  type: types.TOGGLE_INSET,
  payload: event
});

export const handleReset = () => ({
  type: types.HANDLE_RESET
});