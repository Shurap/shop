import {prop} from 'ramda';

export const getProductById = (state, id) => prop(id, state.products);

export const getProducts = (state) => {
  const products = state.showProducts.ids.map((element) => {
    return getProductById (state, element);
  });
  return products;
}

