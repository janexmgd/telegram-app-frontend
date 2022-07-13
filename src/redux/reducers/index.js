import { combineReducers } from 'redux';

// import reducer
import listUserReducer from './listUser';

const rootReducers = combineReducers({
  listUser: listUserReducer,
});

export default rootReducers;
