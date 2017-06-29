import React from 'react';
import PropTypes from 'prop-types';



const ExpenseList = ({ expenseList }) => {
  const expenses = expenseList.map((expense) => {
    return (
        <div>{expense.description}</div>);
  });

  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}>Look at alla these expenses</h3>
      <ul className={cx('list')}>{expenses}</ul>
    </div>
  );
};

ExpenseList.propTypes = {
    expenseList: PropTypes.array.isRequired
};

export default ExpenseList;
