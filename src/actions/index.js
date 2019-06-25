import { 
  ADD_ALL_PRODUCTS, 
  ADD_ONE_PRODUCT 
} from '../constants';

export function addAllProducts (data) {
  return {
    type: ADD_ALL_PRODUCTS,
    data
  }
}

export function addOneProduct (data) {
  return {
    type: ADD_ONE_PRODUCT,
    data
  }
}