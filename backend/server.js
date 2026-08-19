require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact.routes');
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require('./routes/products');
const brandsRoutes = require('./routes/brands');
const blogsRoutes = require('./routes/blogs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/brands', brandsRoutes);
app.use('/api/blogs', blogsRoutes);

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
