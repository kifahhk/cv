import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import { App, Home, NotFound } from './components/App.js';
import Index from "./pages/index";
import NotFound from "./pages/404";
//import { About } from './components/About.js';

export const routes = (
  <Route path='/' title='CV' component={Index}>

    <IndexRoute component={Index} />

    <Route path='*' title='404: Not Found' component={NotFound} />

  </Route>
);

export default routes;
