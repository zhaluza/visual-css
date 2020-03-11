import * as types from '../constants/actionTypes';

// Box Shadow
export const handleXPosition = value => ({
  type: types.HANDLE_X_POSITION,
  payload: value
});

export const handleYPosition = value => ({
  type: types.HANDLE_Y_POSITION,
  payload: value
});

export const handleSpread = value => ({
  type: types.HANDLE_SPREAD,
  payload: value
});

export const handleBlur = value => ({
  type: types.HANDLE_BLUR,
  payload: value
});

export const toggleInset = toggle => ({
  type: types.TOGGLE_INSET,
  payload: toggle
});
