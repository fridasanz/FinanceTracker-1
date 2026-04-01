const express = require('express');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// In-Memory Daten
let tasks = [];
let nextId = 1;

// Routen

// GET /api/tasks – alle Tasks zurückgeben
app.get('/api/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// GET /api/tasks/:id – einzelnen Task zurückgeben, 404 wenn nicht gefunden
app.get('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.status(200).json(task);
});

// POST /api/tasks – neuen Task anlegen, 400 wenn Titel fehlt
app.post('/api/tasks', (req, res) => {
  const { title, description, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = {
    id: nextId++,
    title,
    description: description || '',
    completed: completed || false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id – Task vollständig ersetzen
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  tasks[taskIndex] = {
    id,
    title,
    description: description || '',
    completed: completed || false
  };
  res.status(200).json(tasks[taskIndex]);
});

// DELETE /api/tasks/:id – Task löschen, 204 als Antwort
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Server starten
app.listen(PORT, () => {
  console.log(`Task API läuft auf Port ${PORT}`);
});