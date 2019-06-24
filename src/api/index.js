import products from './productsDB';

//imitation of server request
export const fetchProducts = () => {
  return new Promise(resolve => {
    resolve(products)
  })
}