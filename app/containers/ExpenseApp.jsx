import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

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
    </div>
  );
};

export default ExpenseApp;
