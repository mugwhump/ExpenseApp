import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createExpense } from '../actions/actions';
import ReactDOM from 'react-dom';

/*
 * High-level container component connected to Redux.
 * Used to submit expenses by making API calls.
 */
class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const { createExpense } = this.props;
        const dateVal = ReactDOM.findDOMNode(this.refs.date).value;
        const descVal = ReactDOM.findDOMNode(this.refs.description).value;
        const amountVal = ReactDOM.findDOMNode(this.refs.amount).value;
        createExpense(descVal, amountVal, dateVal);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Date</label><br/>
                    <input ref="date" type="date" defaultValue="2017-06-27" 
                        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/><br/>
                    <label>Description</label><br/>
                    <input ref="description" required/><br/>
                    <label>Amount</label><br/>
                    <input ref="amount" type="number" min="0" step=".01" required/><br/>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    };
}

ExpenseForm.propTypes = {
    createExpense: PropTypes.func.isRequired
};

export default connect(null, { createExpense })(ExpenseForm);
