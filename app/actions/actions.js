import * as types from '../types/actionTypes';

export function filterByText(text) {
    return { type: types.UPDATETEXTFILTER, textFilter: text };
}

//@param dateFilter - one of the 3 types defined in actionTypes.js
export function filterByDate(date) {
    return { type: types.UPDATEDATEFILTER, dateFilter: date };
}

export function createExpenseRequest(date, description, amount) {
    return {
        type: types.CREATE_EXPENSE_REQUEST,
        date: date,
        description: description,
        amount: amount
    };
}
