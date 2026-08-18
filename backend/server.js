require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
