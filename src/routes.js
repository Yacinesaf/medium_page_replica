import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Article from './Article'
import Medium from './Medium';
const createRoutes = () => (
  <BrowserRouter>
    <Route exact path='/' component={Medium} />
    <Route exact path='/article/:title' component={Article} />
  </BrowserRouter>
);

export default createRoutes;