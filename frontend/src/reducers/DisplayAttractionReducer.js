import {DISPLAY_CLICKED_ATTRACTION, DELETE_DISPLAY} from '../util/map_util.js';

const DisplayAttractionReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case DISPLAY_CLICKED_ATTRACTION:
      return action.loc;
    case DELETE_DISPLAY:
      return [];
    default:
      return state;
  }
}

export default DisplayAttractionReducer;
