import _ from 'lodash';
import Expense from '../models/expenses';


/**
 * List Expenses
 */
export function all(req, res) {
  Expense.find({}).exec((err, expenses) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(expenses);
  });
}

/**
 * Add an Expense
 */
export function add(req, res) {
  Expense.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}


export default {
  all,
  add
};
