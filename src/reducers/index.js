import {combineReducers} from 'redux';
import products from './reduserProducts';
import showProducts from './reducerShowProducts';

const reducers = combineReducers({
  products,
  showProducts
});

export default reducers;