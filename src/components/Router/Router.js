import React from 'react';
import { Route } from 'react-router-dom';
import PageMain from '../PageMain';
import PageCatalog from '../PageCatalog';
import PageProduct from '../PageProduct';

const Router = () => (
  <main>
    <Route exact path='/' component={PageMain} />
    <Route path='/catalog' component={PageCatalog} />
    <Route path='/product/:id' component={PageProduct}/>
  </main>
);

export default Router;