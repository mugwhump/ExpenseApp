import * as types from '../types/actionTypes';
import { combineReducers } from 'redux';


const filter = (state={textFilter:"", dateFilter:types.DATEFILTERALL}, action) => {
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
        case types.REQUEST_SUCCESS:
            if (action.data) return action.data;
            return state;
        case types.CREATE_EXPENSE_SUCCESS:
            return [...state, {
                date: action.date, 
                description: action.description, 
                amount: action.amount
            }];
        default:
            return state;
    }
}

const expenseList = (state={}, action) => {
    switch (action.type) {
        case types.REQUEST_SUCCESS:
            return {expenses: expenses(state.expenses, action)};
        case types.CREATE_EXPENSE_REQUEST:
            //TODO: indicate that a request is underway
            return state;
        case types.CREATE_EXPENSE_SUCCESS:
            return {expenses: expenses(state.expenses, action)};
        case types.CREATE_EXPENSE_FAILURE:
            //TODO: indicate that request has failed
            return state;
        default:
            return state;
    }
}

            
const filterListReducer = combineReducers({filter, expenseList});

export default filterListReducer;
