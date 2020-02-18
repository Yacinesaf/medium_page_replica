import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Article from './Article'
import Medium from './Medium';
const createRoutes = () => (
  <BrowserRouter>
    <Route exact path='/' component={Medium} />
    <Route exact path='/article' component={Article} />
  </BrowserRouter>
);

export default createRoutes;