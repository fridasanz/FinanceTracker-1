const express = require('express');
const router = express.Router();

// Sample data
let budgets = [
  { id: 1, category: 'Food', limit: 500, spent: 200 }
];

// GET all budgets
router.get('/', (req, res) => {
  res.json(budgets);
});

// POST new budget
router.post('/', (req, res) => {
  const newBudget = { id: budgets.length + 1, ...req.body };
  budgets.push(newBudget);
  res.json(newBudget);
});

// PUT update budget
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const budget = budgets.find(b => b.id === id);
  if (budget) {
    Object.assign(budget, req.body);
    res.json(budget);
  } else {
    res.status(404).json({ error: 'Budget not found' });
  }
});

module.exports = router;