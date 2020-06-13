import * as types from '../constants/actionTypes';

const initialState = {
  posX: 5,
  posY: 5,
  spread: 5,
  blur: 5,
  opacity: 0.2,
  inset: false,
};

const boxShadowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_X_POSITION_BOX_SHADOW:
      const posX = action.payload;
      return {
        ...state,
        posX,
      };

    case types.HANDLE_Y_POSITION_BOX_SHADOW:
      const posY = action.payload;
      return {
        ...state,
        posY,
      };
    case types.HANDLE_BLUR_BOX_SHADOW:
      const blur = action.payload;
      return {
        ...state,
        blur,
      };
    case types.HANDLE_SPREAD_BOX_SHADOW:
      const spread = action.payload;
      return {
        ...state,
        spread,
      };
    case types.HANDLE_OPACITY_BOX_SHADOW:
      const opacity = action.payload / 100;
      return {
        ...state,
        opacity,
      };
    case types.TOGGLE_INSET_BOX_SHADOW:
      const inset = action.payload;

      return {
        ...state,
        inset,
      };
    case types.HANDLE_RESET_BOX_SHADOW:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default boxShadowReducer;
