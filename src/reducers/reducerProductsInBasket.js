import { ADD_PRODUCT_TO_BASKET } from '../constants';
import { append } from 'ramda';

const defaultState = [];

function productsInBasket(state = defaultState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return append(action.data, state);
    default:
      return state;
  }
}

export default productsInBasket;