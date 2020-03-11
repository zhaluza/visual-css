import * as types from '../constants/actionTypes';

const initialState = {
  currentUser: {},
  isLoggedIn: false,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false
      };
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case types.SIGN_IN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.SIGN_IN_SUCCESS:
      return {
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false
      };

    case types.SIGN_IN_FAILURE:
      return {
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default userReducer;
