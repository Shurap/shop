import { ADD_ALL_PRODUCTS } from '../constants';

export function addAllProducts (data) {
  return {
    type: ADD_ALL_PRODUCTS,
    data
  }
}