import { ADD_SEARCH_LABEL } from '../constants';
import { merge } from 'ramda';

const defaultState = {searchLabel: ''};

function search(state = defaultState, action) {
  switch (action.type) {
    case ADD_SEARCH_LABEL:
      return {...state, searchLabel: action.data};
    default:
      return state;
  }
}

export default search;