import * as types from '../types/actionTypes';
import { combineReducers } from 'redux';


const filter = (state={}, action) => {
    switch(action.type) {
        case types.UPDATETEXTFILTER:
            return {
                textFilter: action.textFilter,
                dateFilter: state.dateFilter
            };
        case types.UPDATEDATEFILTER:
            return {
                textFilter: state.textFilter,
                dateFilter: action.dateFilter
            };
        default:
            return state;
    }
}

const expenses = (state=[], action) => {
    switch (action.type) {
        case types.CREATE_EXPENSE_REQUEST:
            return [...state, {
                date: action.date, 
                description: action.description, 
                action: action.amount
            }];
        default:
            return state;
    }
}

//TODO: add expenseList reducer that handles requests, maybe as parent of expenses?
            
const filterListReducer = combineReducers({filter, expenses});

export default filterListReducer;
