import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import boxShadowReducer from './boxShadowReducer';
import borderRadiusReducer from './borderRadiusReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  mode: modeReducer,
  borderRadius: borderRadiusReducer,
  boxShadow: boxShadowReducer,
  userInfo: userReducer
});

export default reducers;
