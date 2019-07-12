import {combineReducers} from 'redux';
import sessionReducer from './session_reducer.js';
import sessionErrorReducer from './session_error_reducer.js';
import entitiesReducer from './entitiesReducer.js';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  error: sessionErrorReducer
});

export default rootReducer;
