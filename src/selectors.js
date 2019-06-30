import { compose, prop, sum, pluck, map } from 'ramda';

export const getProductById = (state, id) => prop(id, state.allProducts);

export const getProducts = (state) => {
  const enterProducts = state.showProducts.ids.map((element) => {
    return getProductById(state, element);
  });
  const exitProducts = enterProducts.filter((element) => {
    return element.name.toLowerCase().indexOf(state.search.searchLabel.toLowerCase()) > -1;
  })
  return exitProducts;
}

export const getCountProductsInBasket = (state) => {
  return state.productsInBasket.length;
}

export const getTotalpriceInBasket = (state) => {
  const totalPrice = compose(
    sum,
    pluck('price'),
    map(id => getProductById(state, id))
  )(state.productsInBasket);
  return totalPrice;
}
