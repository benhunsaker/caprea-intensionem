import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import NewBudget from './containers/budget/new';
import ViewBudget from './containers/budget/view';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="budget/new" component={NewBudget} />
    <Route path="budget/:budget_id" component={ViewBudget} />
  </Route>
);
