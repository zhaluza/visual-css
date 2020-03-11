import { combineReducers } from 'redux';
import boxShadowReducer from './boxShadowReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  boxShadow: boxShadowReducer,
  user: userReducer
});

export default reducers;
