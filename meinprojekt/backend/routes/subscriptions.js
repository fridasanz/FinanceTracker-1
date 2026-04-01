const express = require('express');
const router = express.Router();

// Sample data
let subscriptions = [
  { id: 1, name: 'Netflix', amount: 15.99, dueDate: '2023-01-15', active: true }
];

// GET all subscriptions
router.get('/', (req, res) => {
  res.json(subscriptions);
});

// POST new subscription
router.post('/', (req, res) => {
  const newSubscription = { id: subscriptions.length + 1, ...req.body };
  subscriptions.push(newSubscription);
  res.json(newSubscription);
});

// PUT update subscription (for detection)
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = subscriptions.findIndex(sub => sub.id === id);
  if (index !== -1) {
    subscriptions[index] = { ...subscriptions[index], ...req.body };
    res.json(subscriptions[index]);
  } else {
    res.status(404).json({ message: 'Subscription not found' });
  }
});

module.exports = router;