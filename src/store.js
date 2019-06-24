import {createStore, compose} from 'redux';
import reducers from './reducers';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => (noop) => noop );
const enhancers = [devtools()];

const store = createStore(reducers, {}, compose(...enhancers));

export default store;