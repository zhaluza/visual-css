import { combineReducers } from 'redux';
import boxShadowReducer from './boxShadowReducer';

const reducers = combineReducers({
  boxShadow: boxShadowReducer
});

export default reducers;
