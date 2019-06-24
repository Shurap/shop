import { ADD_ALL_PRODUCTS } from '../constants';
import { merge, pluck } from 'ramda';

const defaultState = {
  ids: []
};

function showProducts(state = defaultState, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      return merge(state, {ids: pluck('id', action.data)});
    default:
      return state;
  }
}

export default showProducts;