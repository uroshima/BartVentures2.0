import {RECEIVE_ATTRACTIONS} from '../util/map_util.js';

const AttractionReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTRACTIONS:
      return action.attractions
    default:
      return state;
  }
}

export default AttractionReducer;
