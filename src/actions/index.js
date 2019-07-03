import { 
  ADD_ALL_PRODUCTS, 
  ADD_ONE_PRODUCT,
  ADD_PRODUCT_TO_BASKET,
  ADD_SEARCH_LABEL,
  ADD_BRAND_LABEL
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

export function addProductToBasket (data) {
  return {
    type: ADD_PRODUCT_TO_BASKET,
    data
  }
}

export function addSearchLabel (data) {
  return {
    type: ADD_SEARCH_LABEL,
    data
  }
}

export function addBrandLabel (data) {
  return {
    type: ADD_BRAND_LABEL,
    data
  }
}
