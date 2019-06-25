import { ADD_ONE_PRODUCT } from '../constants';
import { merge } from 'ramda';

const defaultState = {};

function oneProduct(state = defaultState, action) {
  switch (action.type) {
    case ADD_ONE_PRODUCT:
      return merge(state, action.data);
    default:
      return state;
  }
}

export default oneProduct;