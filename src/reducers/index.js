import {combineReducers} from 'redux';
import allProducts from './reducerAllProducts';
import showProducts from './reducerShowProducts';
import oneProduct from './reducerOneProduct';
import productsInBasket from './reducerProductsInBasket';
import search from './reducerSearch';

const reducers = combineReducers({
  allProducts,
  showProducts,
  oneProduct,
  productsInBasket,
  search
});

export default reducers;