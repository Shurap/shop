import { ADD_BRAND_LABEL } from '../constants';

const defaultState = {brandLabel: ''};

function brand(state = defaultState, action) {
  switch (action.type) {
    case ADD_BRAND_LABEL:
      return {...state, brandLabel: action.data};
    default:
      return state;
  }
}

export default brand;