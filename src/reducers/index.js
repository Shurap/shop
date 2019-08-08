import {combineReducers} from 'redux';
import allProducts from './reducerAllProducts';
import oneProduct from './reducerOneProduct';
import productsInBasket from './reducerProductsInBasket';
import search from './reducerSearch';
import brand from './reducerBrand';
import sort from './reducerSort';

const reducers = combineReducers({
  allProducts,
  oneProduct,
  productsInBasket,
  search,
  brand,
  sort
});

export default reducers;