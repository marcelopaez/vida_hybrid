import { combineReducers } from 'redux';
import generalReducer from '../reducers/general';

const reducers = combineReducers({
  general: generalReducer,
});

export default reducers;
