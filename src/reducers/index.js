import {combineReducers} from 'redux';
import allProducts from './reducerAllProducts';
import showProducts from './reducerShowProducts';
import oneProduct from './reducerOneProduct'
import productsInBasket from './reducerProductsInBasket'

const reducers = combineReducers({
  allProducts,
  showProducts,
  oneProduct,
  productsInBasket
});

export default reducers;