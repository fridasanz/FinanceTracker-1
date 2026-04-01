const express = require('express');
const router = express.Router();

// Sample data
let transactions = [
  { id: 1, type: 'income', amount: 1000, category: 'Salary', date: '2023-01-01' },
  { id: 2, type: 'expense', amount: 50, category: 'Food', date: '2023-01-02' }
];

// GET all transactions
router.get('/', (req, res) => {
  res.json(transactions);
});

// POST new transaction
router.post('/', (req, res) => {
  const newTransaction = { id: transactions.length + 1, ...req.body };
  transactions.push(newTransaction);
  res.json(newTransaction);
});

module.exports = router;