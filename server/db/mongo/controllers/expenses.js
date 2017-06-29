import _ from 'lodash';
import Expense from '../models/expenses';


/**
 * Add an Expense
 */
export function add(req, res) {
  console.log("Requesta: " + JSON.stringify(req.body));
  Expense.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}


export default {
  //all,
  add
};
