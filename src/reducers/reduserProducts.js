import { ADD_ALL_PRODUCTS } from '../constants';
import { merge, indexBy, prop } from 'ramda';

const defaultState = {};

function products(state = defaultState, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
    const newData = indexBy(prop('id'), action.data)
      return merge(state, newData);
    default:
      return state;
  }
}

export default products;