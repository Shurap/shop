import { ADD_SORT_LABEL } from '../constants';

const defaultState = {sortLabel: ''};

function sort(state = defaultState, action) {
  switch (action.type) {
    case ADD_SORT_LABEL:
      return {...state, sortLabel: action.data};
    default:
      return state;
  }
}

export default sort;