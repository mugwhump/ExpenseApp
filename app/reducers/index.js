import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as types from '../types';
import filterList from '../reducers/filterList';


// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    //user,
    filterList,
    routing
});

export default rootReducer;
