import * as types from '../constants/actionTypes';

const initialState = {
  pixels: 0,
  percent: 0,
};

const borderRadiusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_PIXELS_BORDER_RADIUS:
      const pixels = action.payload;
      return {
        ...state,
        pixels,
      };
    case types.HANDLE_PERCENTS_BORDER_RADIUS:
      const percent = action.payload;
      return {
        ...state,
        percent,
      };
    case types.HANDLE_RESET_BORDER_RADIUS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default borderRadiusReducer;
