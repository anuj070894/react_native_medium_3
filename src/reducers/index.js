import { combineReducers } from 'redux';
import SportsReducer from './SportsReducer';
import SelectSportsReducer from './SelectSportsReducer';

export default combineReducers({
  sportsList: SportsReducer,
  selectedSportsIndex: SelectSportsReducer,
}); // store.getState() -> sportsList : [], selectedSportsIndex: null
