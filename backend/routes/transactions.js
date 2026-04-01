const express = require('express');
const router = express.Router();

// Sample data
let transactions = [
  { id: 1, type: 'income', amount: 1000, category: 'Salary', date: '2023-01-01', title: 'Monthly Salary' },
  { id: 2, type: 'expense', amount: 50, category: 'Food', date: '2023-01-02', title: 'Lunch' }
];
let nextId = 3;

// GET all transactions
router.get('/', (req, res) => {
  res.json(transactions);
});

// POST new transaction
router.post('/', (req, res) => {
  const newTransaction = { id: nextId++, ...req.body };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

// PUT update transaction
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const transaction = transactions.find(t => t.id === id);
  if (transaction) {
    Object.assign(transaction, req.body);
    res.json(transaction);
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

// DELETE transaction
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = transactions.findIndex(t => t.id === id);
  if (index !== -1) {
    transactions.splice(index, 1);
    res.json({ message: 'Transaction deleted' });
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

module.exports = router;