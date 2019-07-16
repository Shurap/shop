import { uniq } from 'ramda';

export const getProducts = (state) => {

  const enterProducts = Object.values(state.allProducts)

  // include Search
  const exitProductsAfterSearch = enterProducts.filter((element) => {
    return element.name.toLowerCase().indexOf(state.search.searchLabel.toLowerCase()) > -1;
  })
  // include Brands
  const exitProducts = (state.brand.brandLabel) ?
    exitProductsAfterSearch.filter((element) => {
      return element.company === state.brand.brandLabel;
    }) : exitProductsAfterSearch;
  return exitProducts;
}

export const getCountProductsInBasket = (state) => {
  if (state.productsInBasket.length === 0) return 0;
  const countProducts = state.productsInBasket.reduce((sum, element) =>{
    return sum + +element.count
  }, 0);
  return countProducts;
}

export const getTotalpriceInBasket = (state) => {
  if (state.productsInBasket.length === 0) return 0;
  const totalPrice = state.productsInBasket.reduce((sum, element) =>{
    return sum + element.price * element.count;
  }, 0);
  return totalPrice;
}

export const getNewId = (state) => {
  return String(Object.values(state.allProducts).length + 1);
}

export const getAllBrands = (state) => {
  return uniq(Object.keys(state.allProducts).map(element => state.allProducts[element]['company']));
}