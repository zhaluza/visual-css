import * as types from '../constants/actionTypes';

const initialState = {
  currentUser: {},
  isLoggedIn: false,
  loading: false,
  error: null,
  signUpUsername: '',
  signUpEmail: '',
  signUpPassword: '',
  signInUsername: '',
  signInEmail: '',
  signInPassword: ''
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
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false
      };

    case types.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case types.HANDLE_SU_USERNAME:
      return {
        ...state,
        signUpUsername: action.payload
      };
    case types.HANDLE_SU_EMAIL:
      return {
        ...state,
        signUpEmail: action.payload
      };
    case types.HANDLE_SU_PASSWORD:
      return {
        ...state,
        signUpPassword: action.payload
      };

    case types.HANDLE_SI_USERNAME:
      return {
        ...state,
        signInUsername: action.payload
      };
    case types.HANDLE_SI_EMAIL:
      return {
        ...state,
        signInEmail: action.payload
      };
    case types.HANDLE_SI_PASSWORD:
      return {
        ...state,
        signInPassword: action.payload
      };
    case types.LOG_OUT:
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default userReducer;
