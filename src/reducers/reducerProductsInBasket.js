import {
  ADD_PRODUCT_TO_BASKET,
  CHANGE_PRODUCT_COUNT_IN_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
  CLEAR_BASKET
} from '../constants';
import { findIndex, append, propEq, update, clone, remove } from 'ramda';

const defaultState = [];

function productsInBasket(state = defaultState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:

      const cloneObj = clone(action.data);
      cloneObj['count'] = 1;

      const index = findIndex(propEq('id', cloneObj.id))(state);
      if (index === -1) {
        return append(cloneObj, state);
      } else {
        const cloneObjNew = state[index];// clone
        cloneObjNew.count = cloneObjNew.count + 1;
        return update(index, cloneObjNew, state);
      }

    case CHANGE_PRODUCT_COUNT_IN_BASKET:
      const productsIndex = findIndex(propEq('id', action.id))(state);
      const newObj = clone(state[productsIndex]);
      newObj.count = action.count;
      return update(productsIndex, newObj, state);

    case DELETE_PRODUCT_FROM_BASKET:
      const deleteIndex = findIndex(propEq('id', action.data))(state);
      return remove(deleteIndex, 1, state);

    case CLEAR_BASKET:
      return [];  

    default:
      return state;
  }
}

export default productsInBasket;