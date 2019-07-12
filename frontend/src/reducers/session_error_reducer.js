// frontend/src/reducers/session_errors_reducer.js

import {
  GET_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../util/session_api_util';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_ERRORS:
    //change action.payload to a array
    return Object.values(action.payload);
    case CLEAR_ERRORS:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
