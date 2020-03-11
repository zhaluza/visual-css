import * as types from '../constants/actionTypes';

const initialState = {
  posX: 0,
  posY: 0,
  spread: 0,
  blur: 0,
  inset: false
};

const boxShadowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_X_POSITION:
      const posX = action.payload;
      return {
        ...state,
        posX
      };

    case types.HANDLE_Y_POSITION:
      const posY = action.payload;
      return {
        ...state,
        posY
      };

    case types.HANDLE_SPREAD:
      const spread = action.payload;
      return {
        ...state,
        spread
      };
    case types.HANDLE_BLUR:
      const blur = action.payload;
      return {
        ...state,
        blur
      };
    case types.TOGGLE_INSET:
      const inset = action.payload;
      return {
        ...state,
        inset
      };
    default:
      return state;
  }
};

export default boxShadowReducer;
