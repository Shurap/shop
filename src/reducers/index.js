import {combineReducers} from 'redux';
import allProducts from './reducerAllProducts';
import oneProduct from './reducerOneProduct';
import productsInBasket from './reducerProductsInBasket';
import search from './reducerSearch';
import brand from './reducerBrand';

const reducers = combineReducers({
  allProducts,
  oneProduct,
  productsInBasket,
  search,
  brand
});

export default reducers;