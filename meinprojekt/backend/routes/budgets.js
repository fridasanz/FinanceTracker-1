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

module.exports = router;