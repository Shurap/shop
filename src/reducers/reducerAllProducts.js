import {
  ADD_ALL_PRODUCTS,
  ADD_DATA_FROM_ADMIN
} from '../constants';
import { merge, indexBy, prop, append } from 'ramda';

const defaultState = {};

function allProducts(state = defaultState, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      const newData = indexBy(prop('id'), action.data);
      return merge(state, newData);

    case ADD_DATA_FROM_ADMIN:
      const adminData = {[action.data.id]: action.data}
      return merge(state, adminData);

    default:
      return state;
  }
}

export default allProducts;