import React from 'react';
import { Route } from 'react-router-dom';
import PageMain from '../PageMain';
import PageCatalog from '../PageCatalog';
import PageProduct from '../PageProduct';
import PageBasket from '../PageBasket';
import styles from './Router.module.css';

const Router = () => (
  <main className={styles.mainWrapper}>
    <Route exact path='/' component={PageMain} />
    <Route path='/catalog' component={PageCatalog} />
    <Route path='/product/:id' component={PageProduct}/>
    <Route path='/basket' component={PageBasket} />
  </main>
);

export default Router;