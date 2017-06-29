/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const expensesController = controllers && controllers.expenses;

export default (app) => {

  // expense routes
  if (expensesController) {
    app.get('/expense', expensesController.all);
    app.post('/expense/add', expensesController.add);
  } else {
    console.warn(unsupportedMessage('expense routes'));
  }
};
