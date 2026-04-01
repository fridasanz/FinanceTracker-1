const express = require('express');
const router = express.Router();

// Sample data
let subscriptions = [
  { id: 1, name: 'Netflix', amount: 15.99, dueDate: '2023-01-15', active: true }
];
let nextId = 2;

// GET all subscriptions
router.get('/', (req, res) => {
  res.json(subscriptions);
});

// POST new subscription
router.post('/', (req, res) => {
  const newSubscription = { id: nextId++, ...req.body };
  subscriptions.push(newSubscription);
  res.status(201).json(newSubscription);
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

// DELETE subscription
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = subscriptions.findIndex(sub => sub.id === id);
  if (index !== -1) {
    subscriptions.splice(index, 1);
    res.json({ message: 'Subscription deleted' });
  } else {
    res.status(404).json({ error: 'Subscription not found' });
  }
});

module.exports = router;