import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from './routes';
import * as types from './types';
import configureStore from './store/configureStore';
import fetchDataForRoute from './utils/fetchDataForRoute';
import {filterByText, filterByDate, createExpense} from './actions/actions';
//import * as types from './types/actionTypes';

// Grab the state from a global injected into
// server-generated HTML
//const initialState = window.__INITIAL_STATE__;

//-------- TESTING ------------
const initialState = {
    filterList: {
        filter: {
            textFilter: 'some text',
            dateFilter: 'DATEFILTERALL'
        },
        expenseList: {
            expenses: [{
                date: Date.now(),
                description: 'I spent too much on advacados',
                amount: 39.52 }
            ]
        }
    }
};

const store = configureStore(initialState, browserHistory);
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
store.dispatch(filterByText(''));
store.dispatch(filterByDate('DATEFILTERWEEK'));
store.dispatch(createExpense('bUy soEMTHaag THAT  s not eggies :)DDD', 50.97));
unsubscribe();

const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

/**
 * Callback function handling frontend route changes.
 */
function onUpdate() {
    // Prevent duplicate fetches when first loaded.
    // Explanation: On server-side render, we already have __INITIAL_STATE__
    // So when the client side onUpdate kicks in, we do not need to fetch twice.
    // We set it to null so that every subsequent client-side navigation will
    // still trigger a fetch data.
    // Read more: https://github.com/choonkending/react-webpack-node/pull/203#discussion_r60839356
    // TODO: fix this up to enable SSR
    //if (window.__INITIAL_STATE__ !== null) {
        //window.__INITIAL_STATE__ = null;
        //return;
    //}

    store.dispatch({ type: types.CREATE_REQUEST });
    fetchDataForRoute(this.state)
        .then((data) => {
            return store.dispatch({ type: types.REQUEST_SUCCESS, data });
        });
}


// Router converts <Route> element hierarchy to a route config:
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig
render(
    <Provider store={store}>
        <Router history={history} onUpdate={onUpdate}>
            {routes}
        </Router>
    </Provider>, document.getElementById('app'));
