import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
import FilterList from './FilterList';
import ExpenseForm from './ExpenseForm';

const cx = classNames.bind(styles);

/*
 * Top-level component. TODO: change css classes
 */
const ExpenseApp = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>An Expense Reporting App</h1>
      <div className={cx('description')}>
        <p>
          Add expenses, view expenses... what CAN'T this app do??
        </p>
      </div>
      <ExpenseForm />
      <br/>
      <FilterList />
    </div>
  );
};

export default ExpenseApp;
