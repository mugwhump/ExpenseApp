import * as types from '../types/actionTypes';
import { expenseService } from '../services';

export function filterByText(text) {
    return { type: types.UPDATETEXTFILTER, textFilter: text };
}

//@param dateFilter - one of the 3 types defined in actionTypes.js
export function filterByDate(date) {
    return { type: types.UPDATEDATEFILTER, dateFilter: date };
}

// Action to indicate an API call to create an expense is underway
function createExpenseRequest() {
    return { type: types.CREATE_EXPENSE_REQUEST };
}

// Action indicating API call was successful.
// @param Object data - an object for the created expense ({date, description, amount})
function createExpenseSuccess(data) {
    return {
        type: types.CREATE_EXPENSE_SUCCESS,
        date: data.date,
        description: data.description,
        amount: data.amount
    };
}

// Action indicating expense-creating API call failed
function createExpenseFailure() {
    return { type: types.CREATE_EXPENSE_FAILURE };
}

/*
 * Action creator returning a function to be executed by Redux-Thunk middleware.
 * Creates a new expense using asynch API calls.
 * Dispatches actions for createExpenseRequest, then createExpenseSuccess/Failure
 * @param Date date - JS Date object
 * @param string description - description of the expense
 * @param double amount - amount in CAD. Should be >= 0
 */
//export function createExpense(date, description, amount) {
export function createExpense(description, amount, date=Date.now()) {
    return (dispatch, getState) => {
        // If the description is empty
        if (description.trim().length <= 0) return;

        const data = {
            date: date,
            description: description,
            amount: amount
        };

        // First dispatch an update to inform user that a request is underway
        dispatch(createExpenseRequest());

        return expenseService().createExpense({ data })
            .then((res) => {
                if (res.status === 200) {
                    // Expense created, dispatch action adding it to list
                    return dispatch(createExpenseSuccess(data));
                }
            })
            .catch((err) => {
                console.log("Error creating expense: " + err);
                return dispatch(createExpenseFailure({ error: 'Unable to create expense. :('}));
            });
    };
}
