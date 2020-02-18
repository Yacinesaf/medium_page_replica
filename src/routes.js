import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Article from './Article'
const createRoutes = () => (
  <BrowserRouter>
    <Route exact path='/article' component={Article} />
  </BrowserRouter>
);

export default createRoutes;