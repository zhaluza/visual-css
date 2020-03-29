import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import boxShadowReducer from './boxShadowReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  mode: modeReducer,
  boxShadow: boxShadowReducer,
  userInfo: userReducer
});

export default reducers;
