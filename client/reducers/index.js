import { combineReducers } from 'redux';
import boxShadowReducer from './boxShadowReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  boxShadow: boxShadowReducer,
  userInfo: userReducer
});

export default reducers;
