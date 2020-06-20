import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import boxShadowReducer from './boxShadowReducer';
import borderRadiusReducer from './borderRadiusReducer';
import rotate3DReducer from './rotate3DReducer';

const reducers = combineReducers({
  mode: modeReducer,
  borderRadius: borderRadiusReducer,
  boxShadow: boxShadowReducer,
  rotate3D: rotate3DReducer,
});

export default reducers;
