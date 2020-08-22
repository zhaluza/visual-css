import * as types from '../constants/actionTypes';

const initialState = {
  boxColor: { r: 255, g: 107, b: 107, a: 1 },
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_BOX_COLOR:
      const newColor = action.payload;
      return {
        boxColor: newColor,
      };
    case types.RESET_BOX_COLOR:
      return {
        boxColor: { ...initialState.boxColor },
      };
    default:
      return state;
  }
};

export default colorReducer;
