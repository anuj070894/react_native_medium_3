import { combineReducers } from 'redux';
import SportsReducer from './SportsReducer';

export default combineReducers({
  sportsList: SportsReducer,
}); // store.getState() -> libraries : []
