import {combineReducers} from 'redux';
import BartStationsReducer from './BartStationsReducer.js';
import AttractionReducer from './AttractionReducer.js';
import DisplayAttractionReducer from './DisplayAttractionReducer.js';

const entitiesReducer = combineReducers({
  bart: BartStationsReducer,
  attraction: AttractionReducer,
  displayed: DisplayAttractionReducer
});

export default entitiesReducer;
