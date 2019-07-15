import { compose, prop, sum, pluck, map, uniq } from 'ramda';
import { createSelector } from 'reselect';

export const getProductById = (state, id) => prop(id, state.allProducts);

export const getProducts = (state) => {
  const enterProducts = state.showProducts.ids.map((element) => {
    return getProductById(state, element);
  });

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

// export const getToBasketProductsWithCount = (state) => {
//   const uniqIds = uniq(state.productsInBasket);
//   const productCount = (id) => {
//     return state.productsInBasket.filter(element => element === id).length
//   }
//   const listProductsInBasket = uniqIds.map(element => {
//     return state.allProducts[element]
//   })
//   listProductsInBasket.map(element => {
//     element['count'] = productCount(element.id)
//   })
//   return listProductsInBasket;
// }

// export const getToBasketProductsWithCount = createSelector(
//   state => state.productsInBasket,
//   state => state.allProducts,
//   (productsInBasket, allProducts) => {
//     const uniqIds = uniq(productsInBasket);
//     const productCount = (id) => {
//       return productsInBasket.filter(element => element === id).length
//     }
//     const listProductsInBasket = uniqIds.map(element => {
//       return allProducts[element]
//     })
//     listProductsInBasket.map(element => {
//       element['count'] = productCount(element.id)
//     })
//     return listProductsInBasket;
//   }
// )

// const getToBasketProductsWithCountById = (id) => createSelector(
//   getToBasketProductsWithCount,
//   (listProductsInBasket) => listProductsInBasket.filtes(el => el === id)
// )

export const getAllBrands = (state) => {
  return uniq(Object.keys(state.allProducts).map(element => state.allProducts[element]['company']));
}