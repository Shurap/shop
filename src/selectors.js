import { compose, prop, sum, pluck, map, uniq } from 'ramda';

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

export const getToBasketProductsWithCount = (state) => {
  const uniqIds = uniq(state.productsInBasket);
  
  const productCount = (id) => {
    return state.productsInBasket.filter(element => element == '1').length
  }

  const listProductsInBasket = uniqIds.map(element => {
    return state.allProducts[element]
  })

  listProductsInBasket.map (element => {
    element['count'] = productCount(element.id)
  })

  return listProductsInBasket;
}