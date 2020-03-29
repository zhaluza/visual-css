import * as types from '../constants/actionTypes';
const initialState = {
  mode: 'box-shadow'
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BOX_SHADOW_MODE:
      return {
        ...state,
        mode: 'box-shadow'
      };
    case types.SET_BORDER_RADIUS_MODE:
      return {
        ...state,
        mode: 'border-radius'
      };
    default:
      return state;
  }
};
export default modeReducer;
