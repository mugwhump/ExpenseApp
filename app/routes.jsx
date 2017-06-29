import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchExpenseData } from './fetch-data';
import { App, ExpenseApp, } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={ExpenseApp} fetchData={fetchExpenseData} />
    </Route>
  );
};
