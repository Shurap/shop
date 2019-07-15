import {
  ADD_ALL_PRODUCTS,
  ADD_DATA_FROM_ADMIN
} from '../constants';
import { merge, pluck, append } from 'ramda';

const defaultState = {
  ids: []
};

function showProducts(state = defaultState, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      return merge(state, { ids: pluck('id', action.data) });

    case ADD_DATA_FROM_ADMIN:
      const newData = {ids: append(action.data.id, state.ids)};
      return merge(state, newData);

    default:
      return state;
  }
}

export default showProducts;