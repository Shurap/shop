import {prop} from 'ramda';

export const getProductById = (state, id) => prop(id, state.allProducts);

export const getProducts = (state) => {
  const products = state.showProducts.ids.map((element) => {
    return getProductById (state, element);
  });
  return products;
}

export const getCountProductsInBasket = (state) => {
  return state.productsInBasket.length;
}
