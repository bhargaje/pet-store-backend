const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/pets');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/pets', petRoutes);

// Global error handler — must be last middleware
app.use(errorHandler);

module.exports = app;
