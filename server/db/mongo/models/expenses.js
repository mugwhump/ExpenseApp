/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
  description: String,
  date: { type: Date, default: Date.now },
  amount: { type: Number, min: 0 }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Expense' collection in the MongoDB database
export default mongoose.model('Expense', ExpenseSchema);

