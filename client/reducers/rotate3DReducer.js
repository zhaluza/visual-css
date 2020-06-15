import * as types from '../constants/actionTypes';

const initialState = {
  x: 0,
  y: 0,
  z: 0,
  angle: 0,
};

const rotate3DReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_X_ROTATE_3D:
      const x = action.payload;
      return {
        ...state,
        x,
      };
    case types.HANDLE_Y_ROTATE_3D:
      const y = action.payload;
      return {
        ...state,
        y,
      };
    case types.HANDLE_Z_ROTATE_3D:
      const z = action.payload;
      return {
        ...state,
        z,
      };
    case types.HANDLE_ANGLE_ROTATE_3D:
      const angle = action.payload;
      return {
        ...state,
        angle,
      };
    case types.HANDLE_RESET_ROTATE_3D:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default rotate3DReducer;
