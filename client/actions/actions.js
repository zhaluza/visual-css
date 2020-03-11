import * as types from '../constants/actionTypes';

// Box Shadow
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
