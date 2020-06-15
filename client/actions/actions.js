import * as types from '../constants/actionTypes';

// USER ACTIONS
export function signIn(userInfo) {
  return (dispatch) => {
    dispatch(signInBegin);
    return fetch('/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        console.log('res.json: ' + json);
        dispatch(signInSuccess(json));
        return json;
      })
      .catch((error) => dispatch(signInFailure(error)));
  };
}

export function signUp(userInfo) {
  return (dispatch) => {
    dispatch(signUpBegin);
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(signUpSuccess(json));
        return json;
      })
      .catch((error) => dispatch(signUpFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const signInBegin = () => ({
  type: types.SIGN_IN_BEGIN,
});
export const signInSuccess = (message) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: message,
});
export const signInFailure = (error) => ({
  type: types.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpBegin = () => ({
  type: types.SIGN_UP_BEGIN,
});

export const signUpSuccess = (message) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: message,
});

export const signUpFailure = (error) => ({
  type: types.SIGN_UP_FAILURE,
  payload: error,
});

export const handleSignUpUsername = (text) => ({
  type: types.HANDLE_SU_USERNAME,
  payload: text,
});
export const handleSignUpEmail = (text) => ({
  type: types.HANDLE_SU_EMAIL,
  payload: text,
});
export const handleSignUpPassword = (text) => ({
  type: types.HANDLE_SU_PASSWORD,
  payload: text,
});

export const handleSignInUsername = (text) => ({
  type: types.HANDLE_SI_USERNAME,
  payload: text,
});
export const handleSignInEmail = (text) => ({
  type: types.HANDLE_SI_EMAIL,
  payload: text,
});
export const handleSignInPassword = (text) => ({
  type: types.HANDLE_SI_PASSWORD,
  payload: text,
});

export const logOut = () => ({ type: types.LOG_OUT });

// MODE ACTIONS
export const setBoxShadowMode = () => ({
  type: types.SET_BOX_SHADOW_MODE,
});

export const setBorderRadiusMode = () => ({
  type: types.SET_BORDER_RADIUS_MODE,
});

export const setRotate3DMode = () => ({
  type: types.SET_ROTATE_3D_MODE,
});

// BOX SHADOW ACTIONS
export const handleXPositionBoxShadow = (event) => ({
  type: types.HANDLE_X_POSITION_BOX_SHADOW,
  payload: event,
});

export const handleYPositionBoxShadow = (event) => ({
  type: types.HANDLE_Y_POSITION_BOX_SHADOW,
  payload: event,
});

export const handleSpreadBoxShadow = (event) => ({
  type: types.HANDLE_SPREAD_BOX_SHADOW,
  payload: event,
});

export const handleBlurBoxShadow = (event) => ({
  type: types.HANDLE_BLUR_BOX_SHADOW,
  payload: event,
});

export const handleOpacityBoxShadow = (event) => ({
  type: types.HANDLE_OPACITY_BOX_SHADOW,
  payload: event,
});

export const toggleInsetBoxShadow = (event) => ({
  type: types.TOGGLE_INSET_BOX_SHADOW,
  payload: event,
});

export const handleResetBoxShadow = () => ({
  type: types.HANDLE_RESET_BOX_SHADOW,
});

// Border Radius Actions
export const handlePixelsBorderRadius = (event) => ({
  type: types.HANDLE_PIXELS_BORDER_RADIUS,
  payload: event,
});

export const handlePercentsBorderRadius = (event) => ({
  type: types.HANDLE_PERCENTS_BORDER_RADIUS,
  payload: event,
});

export const handleResetBorderRadius = (event) => ({
  type: types.HANDLE_RESET_BORDER_RADIUS,
  payload: event,
});

// Rotate 3D Actions
export const handleXRotate3D = (event) => ({
  type: types.HANDLE_X_ROTATE_3D,
  payload: event,
});

export const handleYRotate3D = (event) => ({
  type: types.HANDLE_Y_ROTATE_3D,
  payload: event,
});

export const handleZRotate3D = (event) => ({
  type: types.HANDLE_Z_ROTATE_3D,
  payload: event,
});

export const handleAngleRotate3D = (event) => ({
  type: types.HANDLE_ANGLE_ROTATE_3D,
  payload: event,
});

export const handleResetRotate3D = (event) => ({
  type: types.HANDLE_RESET_ROTATE_3D,
  payload: event,
});
