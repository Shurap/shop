import {combineReducers} from 'redux';
import allProducts from './reducerAllProducts';
import showProducts from './reducerShowProducts';
import oneProduct from './reducerOneProduct'

const reducers = combineReducers({
  allProducts,
  showProducts,
  oneProduct
});

export default reducers;