import * as types from '../constants/actionTypes';

const defaultColor = '#ff6b6b';
const initialState = {
  backgroundColor: defaultColor,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_BOX_COLOR:
      const newColor = action.payload;
      return {
        backgroundColor: newColor,
      };
    case types.RESET_BOX_COLOR:
      return {
        backgroundColor: defaultColor,
      };
    default:
      return state;
  }
};

export default colorReducer;
