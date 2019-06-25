import products from './productsDB';
import { find, propEq } from 'ramda';

//imitation of server request
export const fetchProducts = () => {
  return new Promise(resolve => {
    resolve(products)
  })
}

//imitation of server request
export const fetchProductById = (id) => {
  return new Promise(resolve => {
    const product = find(propEq('id', id), products);
    resolve(product);
  })
}