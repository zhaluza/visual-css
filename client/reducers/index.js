import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import boxShadowReducer from './boxShadowReducer';
import borderRadiusReducer from './borderRadiusReducer';
import rotate3DReducer from './rotate3DReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  mode: modeReducer,
  borderRadius: borderRadiusReducer,
  boxShadow: boxShadowReducer,
  rotate3D: rotate3DReducer,
  userInfo: userReducer,
});

export default reducers;
