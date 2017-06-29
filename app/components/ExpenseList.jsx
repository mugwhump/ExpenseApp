import React from 'react';
import PropTypes from 'prop-types';
import { DATEFILTERALL, DATEFILTERWEEK, DATEFILTERYEAR } from '../types/actionTypes.js';


const ExpenseList = ({ filter, expenses }) => {
    // Filter expenses by text
    const filteredByText = expenses.filter(exp => 
                exp.description.toLowerCase().search(filter.textFilter.toLowerCase()) !== -1);

    // Filter expenses by date
    const filterByDate = (expensesToFilter, dateType) => {
        switch(dateType) {
            case DATEFILTERALL:
            default:
                return expensesToFilter;
            case DATEFILTERWEEK:
                const lastWeek = new Date();
                lastWeek.setDate(lastWeek.getDate()-7);
                return expensesToFilter.filter(exp => new Date(exp.date) > lastWeek);
            case DATEFILTERYEAR:
                const lastYear = new Date();
                lastYear.setDate(lastYear.getDate()-365);
                return expensesToFilter.filter(exp => new Date(exp.date) > lastYear);
        }
    }
    const fullyFiltered = filterByDate(filteredByText, filter.dateFilter);

    const expenseOutput = fullyFiltered.map((expense, key) => {
        return (
            <li key={key}>
                <div>
                    <span>{expense.date}</span>
                    <span>  ${expense.amount}</span>
                </div>
                <div> {expense.description} </div>
            </li>);
    });

    return (
        <div > 
            <ul>{expenseOutput}</ul>
        </div>
    );
};

ExpenseList.propTypes = {
    filter: PropTypes.object.isRequired,
    expenses: PropTypes.array.isRequired
};

export default ExpenseList;
