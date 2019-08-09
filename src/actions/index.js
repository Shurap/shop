import { 
  ADD_ALL_PRODUCTS, 
  ADD_ONE_PRODUCT,
  ADD_PRODUCT_TO_BASKET,
  ADD_SEARCH_LABEL,
  ADD_BRAND_LABEL,
  CHANGE_PRODUCT_COUNT_IN_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
  ADD_DATA_FROM_ADMIN,
  ADD_SORT_LABEL,
  CLEAR_BASKET
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

export function changeProductCountInBasket (count, id) {
  return {
    type: CHANGE_PRODUCT_COUNT_IN_BASKET,
    count,
    id
  }
}

export function deleteProductFromBasket (data) {
  return {
    type: DELETE_PRODUCT_FROM_BASKET,
    data
  }
}

export function addDataFromAdmin (data) {
  return {
    type: ADD_DATA_FROM_ADMIN,
    data
  }
}

export function addSortLabel (data) {
  return {
    type: ADD_SORT_LABEL,
    data
  }
}

export function clearBasket () {
  return {
    type: CLEAR_BASKET
  }
}