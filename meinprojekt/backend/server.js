const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/budgets', require('./routes/budgets'));
app.use('/api/subscriptions', require('./routes/subscriptions'));

app.get('/api/status', (req, res) => {
  res.json({ ok: true, timestamp: new Date() });
});

app.use((req, res) => {
  res.status(404).json({ error: `Ruta ${req.path} no encontrada` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

const server = app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Puerto ${PORT} ocupado. Corre: lsof -ti:${PORT} | xargs kill -9`);
    process.exit(1);
  }
});
