import * as types from '../constants/actionTypes';

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

// COLOR ACTIONS
export const handleBoxColor = (newColor) => ({
  type: types.HANDLE_BOX_COLOR,
  payload: newColor,
});

export const resetBoxColor = () => ({
  type: types.RESET_BOX_COLOR,
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
