import {RECEIVE_BUDGET_BART_STATIONS} from '../util/map_util.js';

const BartStationsReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUDGET_BART_STATIONS:
      return action.bartStations;
    default:
      return state;
  }
}

//comment for 
export default BartStationsReducer;
